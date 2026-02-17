const inp1 = document.getElementById('num1');
const inp2 = document.getElementById('num2');
const result = document.getElementById('output');
const selectedOption = document.getElementById('selectedOption');
function square(btn) {
    result.innerHTML = (inp1.value * inp1.value) + ", " + (inp2.value * inp2.value);
    selectedOption.innerHTML = btn.innerHTML;
} function root(btn) {
    result.innerHTML = Math.sqrt(inp1.value) + ", " + Math.sqrt(inp2.value);
    selectedOption.innerHTML = btn.innerHTML;
} function divide(btn) {
    if (parseFloat(inp2.value) === 0) {
        result.innerHTML = "You tought you could trick me!";
        selectedOption.innerHTML = btn.innerHTML;
        return;
    }
    result.innerHTML = parseFloat(inp1.value) / parseFloat(inp2.value);
    selectedOption.innerHTML = btn.innerHTML;
}
function multi(btn) {
    result.innerHTML = parseFloat(inp1.value) * parseFloat(inp2.value);
    selectedOption.innerHTML = btn.innerHTML;
}
function add(btn) {
    result.innerHTML = parseFloat(inp1.value) + parseFloat(inp2.value);
    selectedOption.innerHTML = btn.innerHTML;
}
function min(btn) {
    result.innerHTML = parseFloat(inp1.value) - parseFloat(inp2.value);
    selectedOption.innerHTML = btn.innerHTML;
}