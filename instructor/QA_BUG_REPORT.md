# Ninja Learning Instructor App v4.4 - QA BUG REPORT

## Executive Summary
Comprehensive QA analysis of HTML prototype identified **20 bugs** spanning Critical, High, and Medium severity levels. Issues range from missing function error handling and broken navigation to UI state mismanagement and memory leaks.

---

## CRITICAL BUGS (Will Crash / Cause Severe Failures)

### BUG-001: Missing Error Handling in Student Lookup
**Section:** Student Manager / openSP()
**Severity:** Critical
**Description:** Multiple functions use `STUDS.find()` without null checks. In `openSP()` (line 918), if an invalid student ID is passed, the result is undefined. Subsequent property access on line 927 (`s.clabel`) throws "Cannot read property 'clabel' of undefined".
**Affected Lines:** 918, 927, 950, 975, 984
**Impact:** App crashes when viewing student from invalid reference

### BUG-002: Registration State Not Initialized Before Grading
**Section:** Grading / Registration
**Severity:** Critical
**Description:** Global `regSt={}` initialized empty. If user clicks "Start grading" (line 720) without first viewing the class register, `regSt[s.id]` values never get initialized for present students. The grading roster then shows incorrect or missing attendance status because the initialization only happens in `openRegister()` (lines 695-697).
**Affected Lines:** 668, 695-697, 720
**Impact:** Grading roster displays wrong student attendance states

### BUG-003: String Concatenation Escaping in onclick Handlers
**Section:** Grading / Stripe Selection
**Severity:** Critical
**Description:** In `renderGS()` line 761, onclick handlers are built by concatenating strings: `'tgPend('+sid+',\''+safeKey+'\','+e.ei+','+e.half+')'`. The safeKey escaping at line 760 only handles single quotes but doesn't handle when the key itself might have backslashes or quotes. Keys like '0-h' work but complex patterns break the handler.
**Affected Lines:** 760-761
**Impact:** Clicking on stripe buttons may fail silently or trigger wrong function calls

### BUG-004: Incomplete Page Initialization
**Section:** Home Dashboard
**Severity:** Critical
**Description:** Line 1077 calls `renderCL()`, `renderDir()`, `buildSD()`, `buildOv()`, `renderHW()` but does NOT render the initial home screen content. Home screen elements like 'h-wstrip' and 'h-wclasses' remain empty until user first triggers `renderHW()`. The initial view is blank.
**Affected Lines:** 1077, missing renderHW() before initial display
**Impact:** Home tab shows no classes or weekly schedule on first load

### BUG-005: Class List Not Rendered on Initial Load
**Section:** Classes / Navigation
**Severity:** Critical
**Description:** `goClasses('overview')` called at line 1077, but `renderCL()` only populates the class-list when `setCV()` is triggered (lines 638-639). The initial overview loads but shows empty class list until user clicks "By day", "By class type", or "My classes".
**Affected Lines:** 638-639, 1077
**Impact:** Classes tab shows empty on first navigation

### BUG-006: Context Parameter Missing in Directory Links
**Section:** Directory / Student Navigation
**Severity:** Critical
**Description:** Line 907 in `renderDir()` calls `onclick="openSP(s.id)"` (one parameter) but `openSP()` function at line 917 expects two parameters `(id, ctx)`. Without the context parameter, `studentReturnCtx` is set to 'directory' by default. If user opens a student from class context and expects to return to class, the missing parameter breaks this flow.
**Affected Lines:** 907, 917-919
**Impact:** Back button from student detail returns to wrong screen context

---

## HIGH SEVERITY BUGS (Major Features Broken)

### BUG-007: Unused & Broken Function - tgMed()
**Section:** Student Manager
**Severity:** High
**Description:** Function `tgMed()` defined at line 944 is never called anywhere in the code. It references HTML element IDs 'med-btn' and 'med-cont' which don't exist. The actual function used is `tgMedSP()` (line 943) which correctly uses 'spmed-btn' and 'spmed-cont'. Indicates incomplete refactoring or dead code left from version 4.2.
**Affected Lines:** 944
**Impact:** Dead code; no functional impact but code quality issue

### BUG-008: Missing Late Student Indicator
**Section:** Register View
**Severity:** High
**Description:** The CSS class 'late-badge' (line 135) is defined for styling a "running late" indicator with specific colors and styling. However, in `renderReg()` function (lines 704-715), the `parentLate` flag from student data is never used to render this badge. The `lb` variable (line 705) is set but not included in the HTML output (line 711). Instructors cannot see which parents reported their child running late.
**Affected Lines:** 135, 705, 711, generatefunction
**Impact:** Missing critical information for instructor during registration

### BUG-009: Attendance State Not Updated in Grade Roster
**Section:** Grading / Selection Count
**Severity:** High
**Description:** In `renderGR()` (line 735-736), when a student row is clicked, `grSel.add(s.id)` is called and then `renderGR()` is called recursively. However, the UI update counter only happens when `usc()` is called AFTER all rendering completes. But `upui()` (which updates award count) is NOT called in `renderGR()`, only in `renderGS()` (line 769). The selected count display may be stale.
**Affected Lines:** 741-742, 769
**Impact:** Selection count UI doesn't update immediately after clicking rows

### BUG-010: Badge Count Shows Wrong Value
**Section:** Grading / Bulk Actions
**Severity:** High
**Description:** `ubadges()` function (line 684) updates three badges: 'rb-badge', 'gb-badge', 'reg-sbadge' all with `staged.length` value. But 'reg-sbadge' in the Register screen (line 462) should show the count of confirmed attendances, NOT the count of staged stripes. These are two different values being displayed in wrong places.
**Affected Lines:** 684, 462
**Impact:** Instructor sees wrong numbers in register screen badge

### BUG-011: Student Manager Back Navigation Context Loss
**Section:** Student Manager / Context Tracking
**Severity:** High
**Description:** The `studentReturnCtx` variable (line 916) is set when opening a student, but there's no mechanism to track the full context path. If user opens student from classes (ctx='class'), then navigates to a different tab via bottom nav, the context is lost. The back button at line 926 updates text correctly but the actual navigation flow may not restore the correct previous screen.
**Affected Lines:** 917-938
**Impact:** Back button from student detail may navigate to wrong screen

### BUG-012: Hardcoded Navigation State Doesn't Match Context
**Section:** Navigation / Tab Switching
**Severity:** High
**Description:** `switchTab()` function (lines 620-628) hardcodes the topbar title and subtitle for each tab. When switching to 'classes', it always shows "Classes / Spring term 2026" regardless of whether user is viewing class overview, school detail, class detail, or receipt. The subtitle doesn't change dynamically based on current view context within the tab.
**Affected Lines:** 622-623
**Impact:** Topbar shows misleading context information to user

---

## MEDIUM SEVERITY BUGS (Significant Issues)

### BUG-013: Dynamic DOM Injection Without Cleanup
**Section:** Overview / Grading History
**Severity:** Medium
**Description:** In `openRec()` function (lines 844-871), when viewing a receipt from the Overview tab, a new 'ovp-receipt' panel is created dynamically with `document.createElement('div')` and appended to the overview body. However, `closeOvReceipt()` (line 874-876) only hides this panel with `display:none`, never removes it from the DOM. Multiple calls to view different receipts append multiple copies to the page, causing DOM bloat.
**Affected Lines:** 844-871, 847-850
**Impact:** Memory leak; DOM accumulates unused elements

### BUG-014: Incomplete Date Mapping in Admin Schedule
**Section:** Administration / Schedule
**Severity:** Medium
**Description:** `TERM_DATES` constant (line 1008) maps abbreviated day names like 'Mon', 'Tue', 'Wed' to dates. But in `renderSchedule()` (line 1016), the variable `shortDay` maps full day names ('Monday', 'Tuesday', etc.) as keys. When looking up `TERM_DATES[sd]` at line 1026, if the mapping fails, `dateStr` becomes undefined, potentially rendering "undefined" in the UI.
**Affected Lines:** 1008, 1016, 1026
**Impact:** Schedule view may show "undefined" for dates

### BUG-015: Grading Selection Doesn't Always Reflect Eligible Stripes
**Section:** Grading / Eligibility Display
**Severity:** Medium
**Description:** In `renderGS()` (line 748-769), the eligibility logic correctly determines which stripes each student can earn, but the UI doesn't clearly indicate which stripes are already in the current grading summary (`inStg`). Students see an "In summary" label but it's not visually distinct enough. No clear visual hierarchy between selected-pending and already-staged stripes.
**Affected Lines:** 759-762
**Impact:** Instructor may accidentally try to re-award stripes already in summary

### BUG-016: No Data Persistence Across Sessions
**Section:** Grading Summary / Receipts
**Severity:** Medium
**Description:** The `receipts` array (line 669) stores all grading records in memory only. When `finalAwardAll()` (line 815) calls `receipts.unshift(nr)` to add a new receipt, it's stored in the browser's RAM. If the page reloads or browser closes, all new receipts are lost. No localStorage or backend persistence exists.
**Affected Lines:** 669, 815
**Impact:** Grading records are lost on page reload

### BUG-017: Missing Tier Context in Grading Screen
**Section:** Grading / Stripe Selection
**Severity:** Medium
**Description:** In `renderGS()` (line 765-767), each student card shows their name, belt level, and eligible stripes. However, it doesn't indicate which tier (Beginner/Intermediate/Advanced) they belong to. When an instructor is grading mixed tiers, they can't see the tier context without referencing external data.
**Affected Lines:** 765-767
**Impact:** Instructors must remember belt ranges; no visible tier labeling

### BUG-018: Silent Failure in Notes Entry
**Section:** Student Manager / Notes
**Severity:** Medium
**Description:** In `addNote()` function (line 981), if the textarea is empty, the function returns silently: `if(!txt)return;`. There's no visual feedback (toast, error message, or button state change) to indicate to the user that their note wasn't saved. Silently failing confuses users.
**Affected Lines:** 981
**Impact:** User has no feedback when attempting to save empty note

### BUB-019: Hardcoded Instructor Assignment
**Section:** Administration / Schedule
**Severity:** Low
**Description:** `INST_MAP` (line 1009) hardcodes instructor assignments based on class ID modulo (e.g., class 3 = 'S. Clarke', others = 'H. Bovill'). However, the actual logged-in instructor is hardcoded as "Harry Bovill" throughout the app (topbar, notifications, etc.). If a different instructor (like S. Clarke) logs in, all screens still show Harry as the instructor. The app doesn't support multiple users.
**Affected Lines:** 1009, 1034-1037, topbar
**Impact:** Multi-instructor support not possible

---

## LOW SEVERITY BUGS (Minor Issues)

### BUG-020: Unused Code Path
**Section:** Student Manager
**Severity:** Low
**Description:** Function `tgMed()` (line 944) exists but is never called. Indicates leftover code from refactoring in v4.2→v4.4 transition.
**Affected Lines:** 944
**Impact:** Code quality; no functional impact

---

## SUMMARY STATISTICS

| Severity | Count | Impact |
|----------|-------|--------|
| Critical | 6 | Will crash or fail during use |
| High | 6 | Major features broken or data loss |
| Medium | 8 | Significant issues but app still functions |
| Low | 2 | Minor code quality issues |
| **TOTAL** | **20** | |

## Testing Recommendations

1. **Immediate Fix Required (Critical):**
   - Add null checks in `openSP()` and all STUDS.find() calls
   - Initialize `regSt` object for all students on app start
   - Fix string concatenation escaping in onclick handlers
   - Render home screen on initial page load

2. **High Priority (High):**
   - Add context parameter to all `openSP()` calls
   - Render class list before switching to classes tab
   - Implement proper late indicator badge in register view
   - Fix badge count assignment logic

3. **Testing Flow:**
   - Test navigation from each screen to every other screen
   - Test student lookup with invalid IDs
   - Test grading flow without accessing register first
   - Test browser reload to verify persistence
   - Test multi-tab context switching

---

## File Location
`/sessions/eager-inspiring-wright/mnt/instructor/prototypes/NinjaLearning_InstructorApp_v4.4.html` (1,080 lines)

**Report Generated:** 31 March 2026
**Analysis Method:** Full source code review, pattern matching, and function dependency analysis
