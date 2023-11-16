//Initialization
const nums = [];
let upperDgm = document.querySelector("#upper-bars");
let buttons = document.getElementsByClassName("controls");
let newArrayBtn = document.querySelector("#newArray");
let delayElement = document.getElementById("speedOfSorting");
let delay = 1;  //Default value of speed
let startBtn = document.querySelector("#start");
startBtn.disabled = true;

//Swap function for bubble and selection sort
function swap(element1, element2) {
    const style1 = window.getComputedStyle(element1);
    const style2 = window.getComputedStyle(element2);
    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");
    element1.style.height = transform2;
    element2.style.height = transform1;
}

//Function to disable sort buttons
function disableButtons() {
    Array.from(buttons).forEach((element) => {
        element.disabled = true;
    })
}

function changeBarColor(element1, element2, color) {
    element1.style.backgroundColor = color;
    element2.style.backgroundColor = color;
}

function manageSpeed(wait) {
    delay = 61 - wait;
}

// Bubble Sort
async function bubbleSort() {
    let startTime = performance.now(); // Record the start time

    let childElements = upperDgm.children;
    console.log(childElements);
    newArrayBtn.disabled = true;
    disableButtons();

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - i - 1; j++) {
            changeBarColor(childElements[j], childElements[j + 1], "red");
            await new Promise((resolve) => {
                setTimeout(resolve, delay);
            });
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
                swap(childElements[j], childElements[j + 1]);
            }
            changeBarColor(childElements[j], childElements[j + 1], "yellow");
        }
        childElements[nums.length - i - 1].style.backgroundColor = "green";
    }

    let endTime = performance.now(); // Record the end time
    let totalTime = endTime - startTime; // Calculate the time difference

    console.log(`Time taken: ${totalTime} milliseconds`);

    newArrayBtn.disabled = false;

    // Display the time on your HTML page
    document.getElementById("timeDisplay").innerText = `Time taken: ${totalTime.toFixed(2)} milliseconds`;
    // After setting the time display text
    let timeDisplay = document.getElementById("timeDisplay");
    timeDisplay.innerText = `Time taken: ${totalTime.toFixed(2)} milliseconds`;
    timeDisplay.classList.add("blinking");

    // To stop the blinking after a certain duration (e.g., 5 seconds)
    setTimeout(() => {timeDisplay.classList.remove("blinking");}, 5000); // 5000 milliseconds (5 seconds)
}



// Selection Sort
async function selectionSort() {
    let startTime = performance.now(); // Record the start time

    let childElements = upperDgm.children;
    console.log(childElements);
    newArrayBtn.disabled = true;
    disableButtons();

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            changeBarColor(childElements[i], childElements[j], "red");
            await new Promise((resolve) => { setTimeout(resolve, delay) });
            if (nums[i] > nums[j]) {
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                swap(childElements[i], childElements[j]);
            }
            changeBarColor(childElements[i], childElements[j], "yellow");
        }
        childElements[i].style.backgroundColor = "green";
    }

    let endTime = performance.now(); // Record the end time
    let totalTime = endTime - startTime; // Calculate the time difference

    console.log(`Time taken: ${totalTime} milliseconds`);

    newArrayBtn.disabled = false;

    // Display the time on your HTML page
    document.getElementById("timeDisplay").innerText = `Time taken: ${totalTime.toFixed(2)} milliseconds`;
    // After setting the time display text
    let timeDisplay = document.getElementById("timeDisplay");
    timeDisplay.innerText = `Time taken: ${totalTime.toFixed(2)} milliseconds`;
    timeDisplay.classList.add("blinking");

    // To stop the blinking after a certain duration (e.g., 5 seconds)
    setTimeout(() => {timeDisplay.classList.remove("blinking");}, 5000); // 5000 milliseconds (5 seconds)
}


// Insertion Sort
async function insertionSort() {
    let startTime = performance.now(); // Record the start time

    let childElements = upperDgm.children;
    console.log(childElements);
    newArrayBtn.disabled = true;
    disableButtons();
    childElements[0].style.backgroundColor = "green";

    for (let i = 1; i < nums.length; i++) {
        let temp = nums[i];
        childElements[i].style.backgroundColor = "red";
        let tempHeight = childElements[i].style.height;
        let j = i - 1;

        while (j >= 0 && nums[j] > temp) {
            childElements[j].style.backgroundColor = "red";
            await new Promise((resolve) => { setTimeout(resolve, delay) });
            nums[j + 1] = nums[j];
            let elementHeight = getComputedStyle(childElements[j]).getPropertyValue("height");
            childElements[j + 1].style.height = elementHeight;
            childElements[j].style.backgroundColor = "green";
            j--;
        }

        nums[j + 1] = temp;
        childElements[j + 1].style.height = tempHeight;
        childElements[i].style.backgroundColor = "green";
    }

    let endTime = performance.now(); // Record the end time
    let totalTime = endTime - startTime; // Calculate the time difference

    console.log(`Time taken: ${totalTime} milliseconds`);

    newArrayBtn.disabled = false;

    // Display the time on your HTML page
    document.getElementById("timeDisplay").innerText = `Time taken: ${totalTime.toFixed(2)} milliseconds`;
    // After setting the time display text
    let timeDisplay = document.getElementById("timeDisplay");
    timeDisplay.innerText = `Time taken: ${totalTime.toFixed(2)} milliseconds`;
    timeDisplay.classList.add("blinking");

    // To stop the blinking after a certain duration (e.g., 5 seconds)
    setTimeout(() => {timeDisplay.classList.remove("blinking");}, 5000); // 5000 milliseconds (5 seconds)
}

// Merge Sort
async function mergeArray(childElements, l, mid, r) {
    for (let a = l; a <= mid; a++) {
        await new Promise((resolve) => { setTimeout(resolve, delay) });
        childElements[a].style.backgroundColor = "orange";
    }
    for (let a = mid + 1; a <= r; a++) {
        await new Promise((resolve) => { setTimeout(resolve, delay) });
        childElements[a].style.backgroundColor = "blue";
    }
    let i = l, j = mid + 1, k = l;
    let tempArray = [];
    while (i <= mid && j <= r) {
        await new Promise((resolve) => { setTimeout(resolve, delay) });
        if (nums[i] < nums[j]) {
            tempArray[k] = nums[i];
            childElements[k].style.height = `${nums[i]}px`;
            i++;
        } else {
            tempArray[k] = nums[j];
            childElements[k].style.height = `${nums[j]}px`;
            j++;
        }
        k++;
    }
    while (i <= mid) {
        await new Promise((resolve) => { setTimeout(resolve, delay) });
        tempArray[k] = nums[i];
        childElements[k].style.height = `${nums[i]}px`;
        k++;
        i++;
    }
    while (j <= r) {
        await new Promise((resolve) => { setTimeout(resolve, delay) });
        tempArray[k] = nums[j];
        childElements[k].style.height = `${nums[j]}px`;
        k++;
        j++;
    }
    for (let k = l; k <= r; k++) {
        nums[k] = tempArray[k];
    }
}

async function mergeSort(nums, childElements, l, r) {
    if (l < r) {
        let mid = parseInt((l + r) / 2);
        await mergeSort(nums, childElements, l, mid);
        await mergeSort(nums, childElements, mid + 1, r);
        await mergeArray(childElements, l, mid, r);
    }
}

async function initiateMerge() {
    let startTime = performance.now(); // Record the start time

    let childElements = upperDgm.children;
    console.log(childElements);
    newArrayBtn.disabled = true;
    disableButtons();
    await mergeSort(nums, childElements, 0, nums.length - 1);
    console.log(nums);
    newArrayBtn.disabled = false;

    let endTime = performance.now(); // Record the end time
    let totalTime = endTime - startTime; // Calculate the time difference

    console.log(`Time taken: ${totalTime} milliseconds`);

    // Display the time on your HTML page
    document.getElementById("timeDisplay").innerText = `Time taken: ${totalTime.toFixed(2)} milliseconds`;
    // After setting the time display text
    let timeDisplay = document.getElementById("timeDisplay");
    timeDisplay.innerText = `Time taken: ${totalTime.toFixed(2)} milliseconds`;
    timeDisplay.classList.add("blinking");

    // To stop the blinking after a certain duration (e.g., 5 seconds)
    setTimeout(() => {timeDisplay.classList.remove("blinking");}, 5000); // 5000 milliseconds (5 seconds)
}


// Heap Sort
async function heapify(nums, childElements, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && nums[left] > nums[largest]) {
        largest = left;
    }

    if (right < n && nums[right] > nums[largest]) {
        largest = right;
    }

    if (largest !== i) {
        await new Promise((resolve) => setTimeout(resolve, delay));

        console.log(`Swapping ${nums[i]} at index ${i} with ${nums[largest]} at index ${largest}`);
        swap(childElements[i], childElements[largest]);

        let temp = nums[i];
        nums[i] = nums[largest];
        nums[largest] = temp;

        await heapify(nums, childElements, n, largest);
    }
}

async function heapSort(nums, childElements) {
    let n = nums.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(nums, childElements, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        await new Promise((resolve) => setTimeout(resolve, delay));

        console.log(`Swapping ${nums[0]} at index 0 with ${nums[i]} at index ${i}`);
        swap(childElements[0], childElements[i]);

        let temp = nums[0];
        nums[0] = nums[i];
        nums[i] = temp;

        await heapify(nums, childElements, i, 0);
        childElements[nums.length - i].style.backgroundColor = "green";
    }
}

async function initiateHeapSort() {
    let startTime = performance.now(); // Record the start time

    let childElements = upperDgm.children;
    console.log(childElements);
    newArrayBtn.disabled = true;
    disableButtons();
    await heapSort(nums, childElements);
    newArrayBtn.disabled = false;

    let endTime = performance.now(); // Record the end time
    let totalTime = endTime - startTime; // Calculate the time difference

    console.log(`Time taken: ${totalTime} milliseconds`);
    
    // Display the time on your HTML page
    document.getElementById("timeDisplay").innerText = `Time taken: ${totalTime.toFixed(2)} milliseconds`;
    // After setting the time display text
    let timeDisplay = document.getElementById("timeDisplay");
    timeDisplay.innerText = `Time taken: ${totalTime.toFixed(2)} milliseconds`;
    timeDisplay.classList.add("blinking");

    // To stop the blinking after a certain duration (e.g., 5 seconds)
    setTimeout(() => {timeDisplay.classList.remove("blinking");}, 5000); // 5000 milliseconds (5 seconds)
}


// Quick Sort
async function partition(nums, childElements, low, high) {
    let pivot = nums[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        childElements[j+1].style.border = "red";
        await new Promise((resolve) => setTimeout(resolve, delay));

        if (nums[j] <= pivot) {
            i++;
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            swap(childElements[i], childElements[j]);
            await new Promise((resolve) => setTimeout(resolve, delay));
            childElements[i].style.border = "green";
        } else {
            childElements[j].style.border = "orange";
        }
        
        childElements[j].style.border = "yellow";
    }

    let temp = nums[i + 1];
    nums[i + 1] = nums[high];
    nums[high] = temp;
    swap(childElements[i + 1], childElements[high]);
    childElements[i + 1].style.border = "green";

    return i + 1;
}

async function quickSort(nums, childElements, low, high) {
    if (low < high) {
        let pivotIndex = await partition(nums, childElements, low, high);

        await Promise.all([
            quickSort(nums, childElements, low, pivotIndex - 1),
            quickSort(nums, childElements, pivotIndex + 1, high)
        ]);
    }
}

async function initiateQuickSort() {
    let startTime = performance.now();

    let childElements = upperDgm.children;
    newArrayBtn.disabled = true;
    disableButtons();
    await quickSort(nums, childElements, 0, nums.length - 1);
    newArrayBtn.disabled = false;

    let endTime = performance.now();
    let totalTime = endTime - startTime;

    console.log(`Time taken: ${totalTime} milliseconds`);

    document.getElementById("timeDisplay").innerText = `Time taken: ${totalTime.toFixed(2)} milliseconds`;
    // After setting the time display text
    let timeDisplay = document.getElementById("timeDisplay");
    timeDisplay.innerText = `Time taken: ${totalTime.toFixed(2)} milliseconds`;
    timeDisplay.classList.add("blinking");

    // To stop the blinking after a certain duration (e.g., 5 seconds)
    setTimeout(() => {timeDisplay.classList.remove("blinking");}, 5000); // 5000 milliseconds (5 seconds)
    // Reset styles after sorting
    childElements.forEach((element) => {
        element.style.border = "2px solid yellow";
    });
}




// 3 Median Quick Sort
async function partitions(nums, childElements, l, h) {
    let pivot = nums[h];
    let i = l - 1;

    for (let j = l; j <= h - 1; j++) {
        childElements[j+1].style.backgroundColor = "#9b59b6"; // Purple
        await new Promise((resolve) => setTimeout(resolve, delay));

        if (nums[j] <= pivot) {
            i++;
            swap(childElements[i], childElements[j]);
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }

        childElements[j+1].style.backgroundColor = "#3498db"; // Blue
    }

    swap(childElements[i + 1], childElements[h]);
    let temp = nums[i + 1];
    nums[i + 1] = nums[h];
    nums[h] = temp;

    return i + 1;
}

async function quickSort(nums, childElements, l, h) {
    if (l < h) {
        let pivot = await partitions(nums, childElements, l, h);
        await Promise.all([
            quickSort(nums, childElements, l, pivot - 1),
            quickSort(nums, childElements, pivot + 1, h)
        ]);
    }
}

async function initiate3QuickSort() {
    let startTime = performance.now(); // Record the start time

    let childElements = upperDgm.children;
    newArrayBtn.disabled = true;
    disableButtons();
    await quickSort(nums, childElements, 0, nums.length - 1);
    newArrayBtn.disabled = false;

    let endTime = performance.now(); // Record the end time
    let totalTime = endTime - startTime; // Calculate the time difference

    console.log(`Time taken: ${totalTime} milliseconds`);

    // Display the time on your HTML page
    document.getElementById("timeDisplay").innerText = `Time taken: ${totalTime.toFixed(2)} milliseconds`;
    // After setting the time display text
    let timeDisplay = document.getElementById("timeDisplay");
    timeDisplay.innerText = `Time taken: ${totalTime.toFixed(2)} milliseconds`;
    timeDisplay.classList.add("blinking");

    // To stop the blinking after a certain duration (e.g., 5 seconds)
    setTimeout(() => {timeDisplay.classList.remove("blinking");}, 5000); // 5000 milliseconds (5 seconds)
    // Reset colors after sorting
    for (let element of childElements) {
        element.style.backgroundColor = "#2ecc71"; // Green
    }
}




//Creating array
function createArray(size) {
    nums.splice(0, nums.length);
    upperDgm.innerHTML = "";
    while (nums.length < size) {
        let r = Math.floor(Math.random() * 100);
        nums.push(r * 3);
    }
    console.log(nums);
    updateNumBarsDisplay(size);

    let element = document.createElement("div");
    element.classList.add("bar");
    element.style.width = "10px";
    element.style.backgroundColor = "yellow";
    element.style.border = "1px solid";

    for (let i = 0; i < size; i++) {
        element.style.height = `${nums[i]}px`;
        upperDgm.appendChild(element.cloneNode(true));
    }
    Array.from(buttons).forEach((element) => {
        element.disabled = false;
    })
    startBtn.disabled = false;

}

async function startSorting() {
    algorithms = {
        "0": selectionSort,
        "1": bubbleSort,
        "2": insertionSort,
        "3": initiateMerge,
        "4": initiateHeapSort,
        "5": initiateQuickSort,
        "6": initiate3QuickSort,
        
    }
    let sortValues = document.getElementsByClassName("form-select");
    let delayElement = document.getElementById("speedOfSorting");
    algorithms[sortValues[0].value]();
}