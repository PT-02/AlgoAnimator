function Merge()
{

    document.getElementById("Time_Worst").innerText = "O(N log N)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";

 
    document.getElementById("Space_Worst").innerText = "O(N)";

    c_delay = 0;

    merge_partition(0, array_size - 1);

    enable_buttons();
}

function merge_sort(start, mid, end)
{
    var p = start, q = mid + 1;

    var Arr = [], k = 0;

    for (var i = start; i <= end; i++)
    {
        if (p > mid)
        {
            Arr[k++] = div_sizes[q++];
            div_update(divs[q - 1], div_sizes[q - 1], "#FF8080"); 
        }
        else if (q > end)
        {
            Arr[k++] = div_sizes[p++];
            div_update(divs[p - 1], div_sizes[p - 1], "#FF8080"); 
        }
        else if (div_sizes[p] < div_sizes[q])
        {
            Arr[k++] = div_sizes[p++];
            div_update(divs[p - 1], div_sizes[p - 1], "#FF8080"); 
        }
        else
        {
            Arr[k++] = div_sizes[q++];
            div_update(divs[q - 1], div_sizes[q - 1], "#FF8080"); 
        }
    }

    for (var t = 0; t < k; t++)
    {
        div_sizes[start++] = Arr[t];
        div_update(divs[start - 1], div_sizes[start - 1], "#89B9AD"); 
    }
}

function merge_partition(start, end)
{
    if (start < end)
    {
        var mid = Math.floor((start + end) / 2);
        div_update(divs[mid], div_sizes[mid], "#374259"); 

        merge_partition(start, mid);
        merge_partition(mid + 1, end);

        merge_sort(start, mid, end);
    }
}


document.getElementById('mergeButton').addEventListener('click', function() {
 
    var pseudocode = `
 MergeSort(arr, start, end):
 1. if start < end
 2.     mid = (start + end) / 2
 3.     MergeSort(arr, start, mid)
 4.     MergeSort(arr, mid + 1, end)
 5.     Merge(arr, start, mid, end)

 Merge(arr, start, mid, end):
 1. Create temporary arrays left and right
 2. Copy data to temp arrays left[] and right[]
 3. Merge the temp arrays back into arr[start..end]
    `;
    document.getElementById('Info_Cont1').innerHTML = `
        <h3>PseudoCode</h3>
        <pre>${pseudocode}</pre>
    `;

 
    Merge();
});
