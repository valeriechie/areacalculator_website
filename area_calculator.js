//This is for creating the tabs, this place most likely will have errors.
function openCalculator(evt, shapeName){
  //Declare all variables
  var i, tabcontent, tablinks;

  //Get all elements with class="tabcontent" and hide them.
  tabcontent = document.getElementsByClassName('tabcontent');
  for(i = 0; i < tabcontent.length; i++){
    tabcontent[i].style.display = "none";
  }

  //Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for(i = 0; i < tablinks.length; i++){
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }

  //Show the current tab, and add an "active" class to the button that opened the tabs
  document.getElementById(shapeName).style.display = "block";
  evt.currentTarget.className += "active";
}

//Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click()

//This is the area calculator, do not touch.
//Rectangle
let button = document.getElementById('btn_rectangle');

button.addEventListener('click', () => {
  const height = parseInt(document.getElementById('height').value);
  const width = parseInt(document.getElementById('width').value);
  const result = document.getElementById('output');
  let height_status=false, width_status=false;

  if(height === '' || isNaN(height) || (height <= 0)){
    document.getElementById('height_error').innerHTML = 'Put an actual number pls :)';
  }else{
    document.getElementById('height_error').innerHTML = '';
    height_status=true;
  }

  if(width === '' || isNaN(width) || (width <= 0)){
    document.getElementById('width_error').innerHTML = 'Put an actual number pls :)';
  }else{
    document.getElementById('width_error').innerHTML = '';
    width_status=true;
  }
  if(height_status && width_status){
    const Area = (width * height);
    result.innerHTML = 'Result:' +  Area
  }else{
    alert('what did you put?');
    result.innerHTML = '';
  }
});

//Triangle
let button_triangle = document.getElementById('btn_triangle');

button_triangle.addEventListener('click', () => {
  const height_triangle = parseInt(document.getElementById('height_triangle').value);
  const base = parseInt(document.getElementById('base').value);
  const result_triangle = document.getElementById('output_triangle');
  let height_triangle_status=false, base_status=false;

  if(height_triangle === '' || isNaN(height_triangle) || (height_triangle <= 0)){
    document.getElementById('height_triangle_error').innerHTML = 'Put an actual number pls :)';
  }else{
    document.getElementById('height_triangle_error').innerHTML = '';
    height_triangle_status=true;
  }

  if(base === '' || isNaN(base) || (base <= 0)){
    document.getElementById('base_error').innerHTML = 'Put an actual number pls :)';
  }else{
    document.getElementById('base_error').innerHTML = '';
    base_status=true;
  }

  if(height_triangle_status && base_status){
    const Area_triangle = (height_triangle * base / 2);
    result_triangle.innerHTML = 'Result:' + Area_triangle
  }else{
    alert('what did you put?');
    result_triangle.innerHTML = '';
  }
});

//Circle
let button_circle = document.getElementById('btn_circle');

button_circle.addEventListener('click', () => {
  const radius = parseInt(document.getElementById('radius').value);
  const result_circle = document.getElementById('output_circle');
  let radius_status=false;

  if(radius === '' || isNaN(radius) || (radius <= 0)){
    document.getElementById('radius_error').innerHTML = 'Put an actual number pls :)';
  }else{
    document.getElementById('radius_error').innerHTML = '';
    radius_status = true;
  }

  if(radius_status){
    const Area_circle = ((radius * radius) *3.14).toFixed(2);
    result_circle.innerHTML = 'Result:' + Area_circle
  }else{
    alert('what did you put?');
    result_circle.innerHTML = '';
  }
});
