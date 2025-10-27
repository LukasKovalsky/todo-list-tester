# Bug Report

## BUG-001: Medzery sa počítajú ako validný task
**Severity:** Medium
**Steps to Reproduce:**
1. Zadaj len medzery "     "
2. Klikni Add Task

**Expected:** Alert "Please enter a task!"
**Actual:** Task s medzerami sa pridá

**Status:** NOT FIXED

---

## BUG-002: Dlhý text sa neobalí
**Severity:** Medium
**Steps to Reproduce:**
1. Zadaj dlhý text (100+ znakov)
2. Klikni na Add Task
**Expected:** Text sa zaobalí aby bol prehľadný
**Actual:** Text sa roztiahne do jedného dlhého riadku a delete button pod task, nie vedľa

**Status:** FIXED
**Fix:** Pridaný CSS styling a zmenená štruktúra HTML (text v <span> elemente)

---

## FEATURE-001: Enter key nefunguje
**Severity:** Medium
**Steps to Reproduce:**
1. Do inputu daj task
2. Klikni na Enter
**Expected:**  Task sa pridá do zoznamu
**Actual:** Task sa nepridá do zoznamu, chýbajúca funkcionalita

**Status:** FIXED
**Fix:** Pridaný event listener pre Enter klávesu v app.js