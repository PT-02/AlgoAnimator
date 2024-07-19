function Heap() {
    document.getElementById("Time_Worst").innerText = "O(N log N)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";
    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay = 0;

    heap_sort();
    enable_buttons();
}

function swap(i, j) {
    div_update(divs[i], div_sizes[i], "#FF8080");
    div_update(divs[j], div_sizes[j], "#FF8080");

    var temp = div_sizes[i];
    div_sizes[i] = div_sizes[j];
    div_sizes[j] = temp;

    div_update(divs[i], div_sizes[i], "#FF8080");
    div_update(divs[j], div_sizes[j], "#FF8080");

    div_update(divs[i], div_sizes[i], "#FFC5C5");
    div_update(divs[j], div_sizes[j], "#FFC5C5");
}

function max_heapify(n, i) {
    var largest = i;
    var l = 2 * i + 1;
    var r = 2 * i + 2;

    if (l < n && div_sizes[l] > div_sizes[largest]) {
        if (largest != i) {
            div_update(divs[largest], div_sizes[largest], "#FFC5C5");
        }
        largest = l;
        div_update(divs[largest], div_sizes[largest], "#FF8080");
    }

    if (r < n && div_sizes[r] > div_sizes[largest]) {
        if (largest != i) {
            div_update(divs[largest], div_sizes[largest], "#FFC5C5");
        }
        largest = r;
        div_update(divs[largest], div_sizes[largest], "#FF8080");
    }

    if (largest != i) {
        swap(i, largest);
        max_heapify(n, largest);
    }
}

function heap_sort() {
    for (var i = Math.floor(array_size / 2) - 1; i >= 0; i--) {
        max_heapify(array_size, i);
    }

    for (var i = array_size - 1; i > 0; i--) {
        swap(0, i);
        div_update(divs[i], div_sizes[i], "#89B9AD");
        div_update(divs[i], div_sizes[i], "#374259");

        max_heapify(i, 0);

        div_update(divs[i], div_sizes[i], "#FFC5C5");
        div_update(divs[i], div_sizes[i], "#89B9AD");
    }
    div_update(divs[i], div_sizes[i], "#89B9AD");
}

document.getElementById('heapButton').addEventListener('click', function() {
    var pseudocode = `
HeapSort(arr):
1. Build a max heap from the input data
2. At this point, the largest item is 
    stored at the root of the heap
3. Replace it with the last item of the heap
    followed by reducing the size of the heap by 1
4. Finally, heapify the root of the tree
5. Repeat step 3 while the size of the heap
     is greater than 1
    `;
    document.getElementById('Info_Cont1').innerHTML = `
        <h3>PseudoCode</h3>
        <pre>${pseudocode}</pre>
    `;

    Heap();
});
