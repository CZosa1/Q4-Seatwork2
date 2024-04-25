document.addEventListener('DOMContentLoaded', () => {
    const equation = document.getElementById('output-before');
    const output = document.getElementById('output');
    
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    
    const add = document.getElementById('add');
    const sub = document.getElementById('sub');
    const div = document.getElementById('div');
    const mul = document.getElementById('mul');
    const exp = document.getElementById('exp');
    const eq = document.getElementById('eq');
    const neq = document.getElementById('neq');
    const gteq = document.getElementById('gteq');
    const lteq = document.getElementById('lteq');
    const gt = document.getElementById('gt');
    const lt = document.getElementById('lt');
    const mod = document.getElementById('mod');
    
    add.onclick = () => {
        const x = parseFloat(num1.value);
        const y = parseFloat(num2.value);
        equation.innerHTML = `${x} + ${y} =`;
        output.innerHTML = x + y;
        if (output.innerHTML.length > 15) output.innerHTML = output.innerHTML.substring(0, 15) + '⋯';
        alert(equation.innerHTML + ' ' + output.innerHTML);
    }
    
    sub.onclick = () => {
        const x = parseFloat(num1.value);
        const y = parseFloat(num2.value);
        equation.innerHTML = `${x} - ${y} =`;
        output.innerHTML = x - y;
        if (output.innerHTML.length > 15) output.innerHTML = output.innerHTML.substring(0, 15) + '⋯';
        alert(equation.innerHTML + ' ' + output.innerHTML);
    }
    
    div.onclick = () => {
        const x = parseFloat(num1.value);
        const y = parseFloat(num2.value);
        equation.innerHTML = `${x} ÷ ${y} =`;
        output.innerHTML = x / y;
        if (output.innerHTML.length > 15) output.innerHTML = output.innerHTML.substring(0, 15) + '⋯';
        alert(equation.innerHTML + ' ' + output.innerHTML);
    }
    
    mul.onclick = () => {
        const x = parseFloat(num1.value);
        const y = parseFloat(num2.value);
        equation.innerHTML = `${x} • ${y} =`;
        output.innerHTML = x * y;
        if (output.innerHTML.length > 15) output.innerHTML = output.innerHTML.substring(0, 15) + '⋯';
        alert(equation.innerHTML + ' ' + output.innerHTML);
    }
    
    exp.onclick = () => {
        const x = parseFloat(num1.value);
        const y = parseFloat(num2.value);
        equation.innerHTML = `${x} ^ ${y} =`;
        output.innerHTML = x ^ y;
        if (output.innerHTML.length > 15) output.innerHTML = output.innerHTML.substring(0, 15) + '⋯';
        alert(equation.innerHTML + ' ' + output.innerHTML);
    }
    
    eq.onclick = () => {
        const x = parseFloat(num1.value);
        const y = parseFloat(num2.value);
        equation.innerHTML = `${x} == ${y} =`;
        output.innerHTML = x == y;
        if (output.innerHTML.length > 15) output.innerHTML = output.innerHTML.substring(0, 15) + '⋯';
        alert(equation.innerHTML + ' ' + output.innerHTML);
    }
    
    neq.onclick = () => {
        const x = parseFloat(num1.value);
        const y = parseFloat(num2.value);
        equation.innerHTML = `${x} != ${y} =`;
        output.innerHTML = x != y;
        if (output.innerHTML.length > 15) output.innerHTML = output.innerHTML.substring(0, 15) + '⋯';
        alert(equation.innerHTML + ' ' + output.innerHTML);
    }
    
    gteq.onclick = () => {
        const x = parseFloat(num1.value);
        const y = parseFloat(num2.value);
        equation.innerHTML = `${x} >= ${y} =`;
        output.innerHTML = x >= y;
        if (output.innerHTML.length > 15) output.innerHTML = output.innerHTML.substring(0, 15) + '⋯';
        alert(equation.innerHTML.replace('&gt;', '>') + ' ' + output.innerHTML);
    }
    
    lteq.onclick = () => {
        const x = parseFloat(num1.value);
        const y = parseFloat(num2.value);
        equation.innerHTML = `${x} <= ${y} =`;
        output.innerHTML = x <= y;
        if (output.innerHTML.length > 15) output.innerHTML = output.innerHTML.substring(0, 15) + '⋯';
        alert(equation.innerHTML.replace('&lt;', '<') + ' ' + output.innerHTML);
    }
    
    gt.onclick = () => {
        const x = parseFloat(num1.value);
        const y = parseFloat(num2.value);
        equation.innerHTML = `${x} > ${y} =`;
        output.innerHTML = x > y;
        if (output.innerHTML.length > 15) output.innerHTML = output.innerHTML.substring(0, 15) + '⋯';
        alert(equation.innerHTML.replace('&gt;', '>') + ' ' + output.innerHTML);
    }
    
    lt.onclick = () => {
        const x = parseFloat(num1.value);
        const y = parseFloat(num2.value);
        equation.innerHTML = `${x} < ${y} =`;
        output.innerHTML = x < y;
        if (output.innerHTML.length > 15) output.innerHTML = output.innerHTML.substring(0, 15) + '⋯';
        alert(equation.innerHTML.replace('&lt;', '<') + ' ' + output.innerHTML);
    }
    
    mod.onclick = () => {
        const x = parseFloat(num1.value);
        const y = parseFloat(num2.value);
        equation.innerHTML = `${x} % ${y} =`;
        output.innerHTML = x % y;
        if (output.innerHTML.length > 15) output.innerHTML = output.innerHTML.substring(0, 15) + '⋯';
        alert(equation.innerHTML + ' ' + output.innerHTML);
    }
});