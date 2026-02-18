const inp1 = document.getElementById('num1');
const inp2 = document.getElementById('num2');
const result = document.getElementById('output');
const selectedOption = document.getElementById('selectedOption');
const maths = {
    "square": (el) => {
        result.innerHTML = (inp1.value * inp1.value) + ", " + (inp2.value * inp2.value);
        selectedOption.innerHTML = el.innerHTML;
    },
    "root": (el) => {
        result.innerHTML = Math.sqrt(inp1.value) + ", " + Math.sqrt(inp2.value);
        selectedOption.innerHTML = el.innerHTML;
    },
    "divide": (el) => {
        if (parseFloat(inp2.value) === 0) {
            result.innerHTML = "You tought you could trick me!";
            selectedOption.innerHTML = el.innerHTML;
            return;
        }
        result.innerHTML = parseFloat(inp1.value) / parseFloat(inp2.value);
        selectedOption.innerHTML = el.innerHTML;
    },
    "multi": (el) => {
        result.innerHTML = parseFloat(inp1.value) * parseFloat(inp2.value);
        selectedOption.innerHTML = el.innerHTML;
    },
    "add": (el) => {
        result.innerHTML = parseFloat(inp1.value) + parseFloat(inp2.value);
        selectedOption.innerHTML = el.innerHTML;
    },
    "min": (el) => {
        result.innerHTML = parseFloat(inp1.value) - parseFloat(inp2.value);
        selectedOption.innerHTML = el.innerHTML;
    },
    "resultForInp": () => {
        let nums = output.innerHTML.split(", ");
        if (nums.length === 2) {
            inp1.value = nums[0];
            inp2.value = nums[1];
        } else {
            inp1.value = nums[0];
            inp2.value = "";
        }
    }
}