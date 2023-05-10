Hello World

<?php
//Variable name must start with $, at the end semicolon is important


    echo "<p>Greetings!</p>";
    $name = "Naz";
    echo "<p>Hello $name!</p>";


    echo '<h4>Variables</h4>';
    $x = 4;
    // to print, all of them will print x value
    echo nl2br("\n"); // new line
    echo $x; 
    echo '<br>'; // new line
    echo ($x);
    echo '<br>';
    print $x;
    echo '<br>';
    print ($x);
    echo '<br>';
    echo '<h4>Array</h4>';
    $array = [6,5,4,7,1,8,9];
    //print $array does not work
    print_r($array); //Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 ) 
    echo nl2br("\n");

    for($i = 0; $i < count($array); $i++){
        print($array[$i]);
    }
    //1234 
    echo nl2br("\n");
    foreach($array as $value){
        print($value);
    }
    //1234 
    echo nl2br("\n");
    echo '<h4>Associative Array </h4>';
    $objects = [
        'year' => 2023,
        'month' => 4,
        'day' => 26
    ];
    //instead of object we have assosiative array
    foreach($objects as $key => $value){
        print($key . ":". $value . "<br>");
    }
    echo nl2br("\n");   

    echo '<h4>Filter</h4>';
    print_r($array);
    echo '<br>';

    // //on arrays try to use foreach loop
    // $filtered = array_filter($array, function($x){
    //     return $x % 2 == 1; 
    // });

    $c = 1;
    //on arrays try to use foreach loop
    $filtered = array_filter($array, function($x) use($c){
        return $x % 2 == $c; 
    });
    // function DO NOT SEE GLOBAL VARIABLES, if you want to use a global variable then change function
    print_r($filtered); // original indexes remain
    echo '<br>';

    $colors = ['r','b','b','b','r','b','b'];
    //QUESTION 1:Count how many r's and how many b's in the array

    //Print Colors array
    foreach ($colors as $color) {
        echo $color . "\n";
    }
    $counts = array_count_values($colors);
    echo '<br>';

    $num_red = $counts['r']; // 2
    echo '<br>';
    $num_blue = $counts['b']; // 5

    echo "Number of red's in the array: " . $num_red;
    echo '<br>';
    echo "Number of blue's in the array: " . $num_blue;
    echo '<br>';


    //Student array
    $students = array(
    array('name' => 'John Doe', 'neptun_id' => 'ABC123', 'dob' => '1995-05-14', 'sex' => 'M'),
    array('name' => 'Jane Doe', 'neptun_id' => 'DEF456', 'dob' => '1998-07-21', 'sex' => 'F'),
    array('name' => 'Bob Smith', 'neptun_id' => 'GHI789', 'dob' => '1999-02-03', 'sex' => 'M'),
    array('name' => 'Alice Johnson', 'neptun_id' => 'JKL012', 'dob' => '1997-11-30', 'sex' => 'F'),
);

    // Function to calculate age based on date of birth
    function calculate_age($dob) {
    $today = new DateTime();
    $birthdate = new DateTime($dob);
    $age = $today->diff($birthdate)->y;
    return $age;
}


// Display student information in an HTML table
echo '<table>';
echo '<tr><th>Name</th><th>Neptun ID</th><th>Date of Birth</th><th>Sex</th></tr>';
foreach ($students as $student) {
    echo '<tr>';
    echo '<td>' . $student['name'] . '</td>';
    echo '<td>' . $student['neptun_id'] . '</td>';
    echo '<td>' . $student['dob'] . '</td>';
    echo '<td>' . $student['sex'] . '</td>';
    echo '</tr>';
}
echo '</table>';


// Find and display the oldest student
$oldest_student = null;
foreach ($students as $student) {
    if (!$oldest_student || $student['dob'] < $oldest_student['dob']) {
        $oldest_student = $student;
    }
}
echo 'The oldest student is ' . $oldest_student['name'] . ', who was born on ' . $oldest_student['dob'] . '.<br>';

// Check if there is a girl among the students
$has_girl = false;
foreach ($students as $student) {
    if ($student['sex'] == 'F') {
        $has_girl = true;
        break;
    }
}
if ($has_girl) {
    echo 'There is at least one girl among the students.<br>';
} else {
    echo 'There are no girls among the students.<br>';
}

// Calculate and display the number of boys and girls as color bars
$num_boys = 0;
$num_girls = 0;
foreach ($students as $student) {
    if ($student['sex'] == 'M') {
        $num_boys++;
    } else {
        $num_girls++;
    }
}
$total_students = count($students);
echo '<div style="background-color: blue; width: ' . ($num_boys / $total_students * 100) . '%;"></div>';
echo '<div style="background-color: pink; width: ' . ($num_girls / $total_students * 100) . '%;"></div>';
echo '<br>';
echo $num_boys . ' boys, ' . $num_girls . ' girls';


?>

Anything else will be just text.
