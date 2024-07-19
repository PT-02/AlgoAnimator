function Quick()
{
   
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N log N)";
    document.getElementById("Time_Best").innerText="Ω(N log N)";

    document.getElementById("Space_Worst").innerText="O(log N)";

    c_delay=0;

    quick_sort(0, array_size-1);

    enable_buttons();
}

function quick_partition(start, end)
{
    var i = start + 1;
    var piv = div_sizes[start]; 
    div_update(divs[start], div_sizes[start], "#374259"); 

    for(var j = start + 1; j <= end; j++)
    {
       
        if (div_sizes[j] < piv)
        {
            div_update(divs[j], div_sizes[j], "#374259"); 

            div_update(divs[i], div_sizes[i], "#FF8080"); 
            div_update(divs[j], div_sizes[j], "#FF8080"); 

            var temp = div_sizes[i];
            div_sizes[i] = div_sizes[j];
            div_sizes[j] = temp;

            div_update(divs[i], div_sizes[i], "#FF8080");
            div_update(divs[j], div_sizes[j], "#FF8080"); 

            div_update(divs[i], div_sizes[i], "FFC5C5"); 
            div_update(divs[j], div_sizes[j], "FFC5C5"); 

            i += 1;
        }
    }
    div_update(divs[start], div_sizes[start], "#FF8080"); 
    div_update(divs[i-1], div_sizes[i-1], "#FF8080"); 

    var temp = div_sizes[start];
    div_sizes[start] = div_sizes[i-1];
    div_sizes[i-1] = temp;

    div_update(divs[start], div_sizes[start], "#FF8080");
    div_update(divs[i-1], div_sizes[i-1], "#FF8080");

    for(var t = start; t <= i; t++)
    {
        div_update(divs[t], div_sizes[t], "#89B9AD"); 
    }

    return i-1; 
}

function quick_sort(start, end)
{
    if(start < end)
    {
        
        var piv_pos = quick_partition(start, end);     
        quick_sort(start, piv_pos - 1);
        quick_sort(piv_pos + 1, end);
    }
}

document.getElementById('quickButton').addEventListener('click', function() {
    var pseudocode = `
QuickSort(arr, start, end):
1. if start < end
2.     pivotIndex = Partition(arr, start, end)
3.     QuickSort(arr, start, pivotIndex - 1)
4.     QuickSort(arr, pivotIndex + 1, end)

Partition(arr, start, end):
1. pivot = arr[start]
2. i = start + 1
3. for j = start + 1 to end
4.     if arr[j] < pivot
5.          swap arr[i] and arr[j]
6.          i += 1
7. swap arr[start] and arr[i - 1]
8. return i - 1
    `;
    document.getElementById('Info_Cont1').innerHTML = `
        <h3>PseudoCode</h3>
        <pre>${pseudocode}</pre>
    `;
    Quick();
});
