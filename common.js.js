$(document).ready(function() {
    // quick sort
    $("#quickSort").click(function() {
        $("#quickSortModal").show();
    });
    $(".quickSortExecute").click(function() {
        var quickSortString = $("#quickSortInput").val();
        var quickSortStringArray = quickSortString.split(',');
        var sortedArray = quick_Sort(quickSortStringArray);
        alert("Sorted array: " + sortedArray);
    });

    //subset
    $("#subset").click(function() {
        $("#subsetModal").show();
    });
    $(".subsetExecute").click(function() {
        alert("dog".sub_String());
    });

    //largest
    $("#largest").click(function() {
        $("#largestModal").show();
    });
    $(".largestExecute").click(function() {

        var largestString = $("#largestInput").val();
        var largestStringArray = largestString.split(',');
        a = largestStringArray[0];
        b = largestStringArray[1];
        c = largestStringArray[2];
        d = largestStringArray[3];
        f = largestStringArray[4];
        if (a > b && a > c && a > d && a > f) {
            alert(a);
        } else if (b > a && b > c && b > d && b > f) {
            alert(b);
        } else if (c > a && c > b && c > d && c > f) {
            alert(c);
        } else if (d > a && d > c && d > b && d > f) {
            alert(d);
        } else {
            alert(f);
        }
    });
    //multiply 
    $("#multiply").click(function() {
        $("#multiplyModal").show();
    });
    $(".multiplyExecute").click(function() {
        alert(get_multiples([3, 5], 1000));
    });

    //startWith 
    $("#startWith").click(function() {
        $("#startWithModal").show();
    });
    $(".startWithExecute").click(function() {
        var startWithString = $("#startWithInput").val();
        alert(javaString(startWithString));
    });
    //range 
    $("#range").click(function() {
        $("#rangeModal").show();
    });
    $(".rangeExecute").click(function() {
        var rangeString = $("#rangeInput").val();
        var rangeStringArray = rangeString.split(',');
        var number1 = rangeStringArray[0];
        var number2 = rangeStringArray[1];
        alert(number2);
        alert(range(number1, number2));
    });

    //duplicate 
    $("#duplicate").click(function() {
        $("#duplicateModal").show();
    });
    $(".duplicateExecute").click(function() {
        var duplicateString1 = $("#duplicateInput1").val();
        var duplicateStringArray1 = duplicateString1.split(',');
        var duplicateString2 = $("#duplicateInput2").val();
        var duplicateStringArray2 = duplicateString2.split(',');
        alert(intersection(duplicateStringArray1, duplicateStringArray2));
    });

    //age 
    $("#age").click(function() {
        $("#ageModal").show();
    });
    $(".ageExecute").click(function() {
        var ageCount = $("#ageInput").val();
        alert(calculate_age(new Date(ageCount)));
    });
    //vowels 
    $("#vowels").click(function() {
        $("#vowelsModal").show();
    });
    $(".vowelExecute").click(function() {
        var vowelCount = vowel_count($("#vowelInput").val());
        alert("vowel count is : " + vowelCount);
    });
    //occurence 
    $("#occurence").click(function() {
        $("#occurenceModal").show();
    });
    $(".occurenceExecute").click(function() {
        var occurenceCount = $("#occurenceInput").val();

        alert(JSON.stringify(Char_Counts(occurenceCount)));
        console.log(Char_Counts(occurenceCount));
    });



    $(".close").click(function() {
        $(".modal").hide();
    });

    String.prototype.sub_String = function() {
        var subset = [];
        for (var m = 0; m < this.length; m++) {
            for (var n = m + 1; n < this.length + 1; n++) {
                subset.push(this.slice(m, n));
            }
        }
        return subset;
    };

    function calculate_age(dob) {
        var diff_ms = Date.now() - dob.getTime();
        var age_dt = new Date(diff_ms);

        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }

    function Char_Counts(str1) {
        var uchars = {};
        str1.replace(/\S/g, function(l) { uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1); });
        return uchars;
    }


    var get_multiples = (function() {

        return function(numbers_list, limit) {
            var output = 0,
                num;

            for (var i = 1; i < limit + 1; i++) {
                let condition = true;
                for (num of numbers_list) {
                    if (i % num !== 0) {
                        condition = false;
                    }
                }
                if (condition) {
                    output += i;
                }
            }

            return output;
        };

    })();

    const intersection = (a, b) => {
        const s = new Set(b);
        return a.filter(x => s.has(x));
    };

    var range = function(start_num, end_num) {
        if (end_num - start_num === 2) {
            return [start_num + 1];
        } else {
            var list = range(start_num, end_num - 1);
            list.push(end_num - 1);
            return list;
        }
    };

    function javaString(str) {
        if (str.length < 4) {
            return false;
        }
        var front = str.substring(0, 4);
        if (front == 'Java') {
            return true;
        } else {
            return false;
        }
    }

    function quick_Sort(origArray) {
        if (origArray.length <= 1) {
            return origArray;
        } else {

            var left = [];
            var right = [];
            var newArray = [];
            var pivot = origArray.pop();
            var length = origArray.length;

            for (var i = 0; i < length; i++) {
                if (origArray[i] <= pivot) {
                    left.push(origArray[i]);
                } else {
                    right.push(origArray[i]);
                }
            }

            return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
        }
    }


    function vowel_count(str1) {
        var vowel_list = 'aeiouAEIOU';
        var vcount = 0;
        for (var x = 0; x < str1.length; x++) {
            if (vowel_list.indexOf(str1[x]) !== -1) {
                vcount += 1;
            }
        }
        return vcount;
    }


});