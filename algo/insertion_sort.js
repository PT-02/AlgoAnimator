function Insertion()
{
    
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N)";

    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay = 0;

    for (var j = 0; j < array_size; j++)
    {
        div_update(divs[j], div_sizes[j], "#374259"); 

        var key = div_sizes[j];
        var i = j - 1;
        while (i >= 0 && div_sizes[i] > key)
        {
            div_update(divs[i], div_sizes[i], "#FF8080"); 
            div_update(divs[i + 1], div_sizes[i + 1], "#FF8080"); 

            div_sizes[i + 1] = div_sizes[i];

            div_update(divs[i], div_sizes[i], "#FF8080"); 
            div_update(divs[i + 1], div_sizes[i + 1], "#FF8080"); 
    
            div_update(divs[i], div_sizes[i], "#FFC5C5"); 
            if (i == (j - 1))
            {
                div_update(divs[i + 1], div_sizes[i + 1], "#374259"); 
            }
            else
            {
                div_update(divs[i + 1], div_sizes[i + 1], "#FFC5C5"); 
            }
            i -= 1;
        }
        div_sizes[i + 1] = key;

        for (var t = 0; t < j; t++)
        {
            div_update(divs[t], div_sizes[t], "#89B9AD");
        }
    }
    div_update(divs[j - 1], div_sizes[j - 1], "#89B9AD");

    enable_buttons();
}

document.getElementById('insertionButton').addEventListener('click', function() {
    var pseudocode = `
InsertionSort(arr):
1. for j from 1 to length(arr)
2.     key = arr[j]
3.     i = j - 1
4.     while i >= 0 and arr[i] > key
5.         arr[i + 1] = arr[i]
6.         i = i - 1
7.     arr[i + 1] = key
    `;
    document.getElementById('Info_Cont1').innerHTML = `
        <h3>PseudoCode</h3>
        <pre>${pseudocode}</pre>
    `;

    Insertion();
});
