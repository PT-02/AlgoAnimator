function Bubble()
{
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N)";
    
    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay = 0;

    for (var i = 0; i < array_size - 1; i++)
    {
        for (var j = 0; j < array_size - i - 1; j++)
        {
            div_update(divs[j], div_sizes[j], "#374259"); 

            if (div_sizes[j] > div_sizes[j + 1])
            {
                div_update(divs[j], div_sizes[j], "#FF8080"); 
                div_update(divs[j + 1], div_sizes[j + 1], "#FF8080"); 

                var temp = div_sizes[j];
                div_sizes[j] = div_sizes[j + 1];
                div_sizes[j + 1] = temp;

                div_update(divs[j], div_sizes[j], "#FF8080"); 
                div_update(divs[j + 1], div_sizes[j + 1], "#FF8080"); 
            }
            div_update(divs[j], div_sizes[j], "#FFC5C5"); 
        }
        div_update(divs[j], div_sizes[j], "#89B9AD"); 
    }
    div_update(divs[0], div_sizes[0], "#89B9AD"); 

    enable_buttons();
}


document.getElementById('bubbleButton').addEventListener('click', function() {
  
    var pseudocode = `
BubbleSort(arr):
1. for i from 0 to n-1
2.     for j from 0 to n-i-1
3.         if arr[j] > arr[j+1]
4.             swap(arr[j], arr[j+1])
    `;
    document.getElementById('Info_Cont1').innerHTML = `
        <h3>PseudoCode</h3>
        <pre>${pseudocode}</pre>
    `;

    Bubble();
});
