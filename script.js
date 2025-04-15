// Save checked states to localStorage
document.querySelectorAll('input[type=checkbox]').forEach(checkbox => {
  const id = checkbox.id;
  checkbox.checked = localStorage.getItem(id) === 'true';

  checkbox.addEventListener('change', () => {
    localStorage.setItem(id, checkbox.checked);
  });
});

// Reset checkboxes
function clearHabits() {
  document.querySelectorAll('input[type=checkbox]').forEach(checkbox => {
    checkbox.checked = false;
    localStorage.setItem(checkbox.id, false);
  });
}
