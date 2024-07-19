function Selection_sort()
{
   
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N^2)";

   
    document.getElementById("Space_Worst").innerText="O(1)";

    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        div_update(divs[i],div_sizes[i],"#FF8080");

        index_min=i;

        for(var j=i+1;j<array_size;j++)
        {
            div_update(divs[j],div_sizes[j],"#374259");
            if(div_sizes[j]<div_sizes[index_min])
            {
                if(index_min!=i)
                {
                    div_update(divs[index_min],div_sizes[index_min],"#FFC5C5");
                }
                index_min=j;
                div_update(divs[index_min],div_sizes[index_min],"#FF8080");
            }
            else
            {
                div_update(divs[j],div_sizes[j],"#FFC5C5");
            }
        }
        
        if(index_min!=i)
        {
            var temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;

            div_update(divs[index_min],div_sizes[index_min],"#FF8080");
            div_update(divs[i],div_sizes[i],"#FF8080");
            div_update(divs[index_min],div_sizes[index_min],"#FFC5C5");
        }
        div_update(divs[i],div_sizes[i],"#FFE5E5");
    }
    div_update(divs[i],div_sizes[i],"#FFE5E5");

    enable_buttons();
}


document.getElementById('selectionButton').addEventListener('click', function() {
    
    var pseudocode = `
<SelectionSort(arr):
1. for i = 0 to n-1
2.     minIndex = i
3.     for j = i+1 to n
4.         if arr[j] < arr[minIndex]
5.             minIndex = j
6.     swap arr[i] with arr[minIndex]
    `;
    document.getElementById('Info_Cont1').innerHTML = `
        <h3>PseudoCode</h3>
        <pre>${pseudocode}</pre>
    `;


    Selection_sort();
});
