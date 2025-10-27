# Test Cases pre Todo List

## TC-001: Pridanie validného tasku
**Kroky:**
1. Otvor aplikáciu
2. Napíš do inputu "Buy milk"
3. Klikni na "Add Task"

**Expected Result:** Task "Buy milk" sa zobrazí v zozname

**Actual Result:** Input Buy milk sa zobrazí v zozname

**Status:** [PASS]

---

## TC-002: Pridanie prázdneho tasku
**Kroky:**
1. Otvor aplikáciu
2. Nechaj input prázdny
3. Klikni na "Add Task"

**Expected Result:** Zobrazí sa alert "Please enter a task!"

**Actual Result:** Pri prázdnom inpute sa zobrazí alert

**Status:** [PASS]

---

## TC-003: Zmazanie tasku
**Kroky:**
1. Pridaj task "Test task"
2. Klikni na "Delete" vedľa tasku

**Expected Result:** Task zmizne zo zoznamu

**Actual Result:** Task po stlačení delte zmizne zo zoznamu

**Status:** [PASS]

---

## TC-004: Pridanie viacerých taskov
**Kroky:**
1. Pridaj task "Task 1"
2. Pridaj task "Task 2"
3. Pridaj task "Task 3"

**Expected Result:** Všetky 3 tasky sa zobrazia v poradí

**Actual Result:** Tasky sa zobrazia v zozname v poradí v ktorom sa pridajú

**Status:** [PASS]