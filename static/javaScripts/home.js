function ChangeToggle(x) {
    x.classList.toggle("fa-server");
  }
document.getElementById('skills_tab').style.display='none'
document.getElementById('projects_tab').style.display='none'
document.getElementById('about_tab').style.display='none'
document.getElementById('askMe_tab').style.display='none'

function view_skills(){
    document.getElementById('skills_tab').style.display='block'
    document.getElementById('Home_tab').style.display='none'
    document.getElementById('projects_tab').style.display='none'
    document.getElementById('about_tab').style.display='none'
    document.getElementById('askMe_tab').style.display='none'
}
function view_home(){
    document.getElementById('skills_tab').style.display='none'
    document.getElementById('Home_tab').style.display='block'
    document.getElementById('projects_tab').style.display='none'
    document.getElementById('about_tab').style.display='none'
    document.getElementById('askMe_tab').style.display='none'
}
function view_projects(){
    document.getElementById('skills_tab').style.display='none'
    document.getElementById('Home_tab').style.display='none'
    document.getElementById('projects_tab').style.display='block'
    document.getElementById('about_tab').style.display='none'
    document.getElementById('askMe_tab').style.display='none'
}
function view_about(){
    document.getElementById('skills_tab').style.display='none'
    document.getElementById('Home_tab').style.display='none'
    document.getElementById('projects_tab').style.display='none'
    document.getElementById('about_tab').style.display='block'
    document.getElementById('askMe_tab').style.display='none'
}
function view_askme(){
  document.getElementById('skills_tab').style.display='none'
  document.getElementById('Home_tab').style.display='none'
  document.getElementById('projects_tab').style.display='none'
  document.getElementById('about_tab').style.display='none'
  document.getElementById('askMe_tab').style.display='block'
}


