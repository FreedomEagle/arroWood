// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
import "bootstrap"
import "../stylesheets/application"

function slideView(){
    if(($('#videoPage').hasClass('col-md-6'))&&($('#audioPage').hasClass('col-md-6'))){
        $('#featureVideo').removeClass('displayNone')
        $('#featureVideo').addClass('display')
        $('#videoResume').removeClass('display')
        $('#videoResume').addClass('displayNone')
        $('#audioPage').addClass('audioBG')
        $('#audioResume').removeClass('display')
        $('#audioResume').addClass('displayNone')
    }
    else if(($('#videoPage').hasClass('col-md-2'))&&($('#audioPage').hasClass('col-md-10'))){
        $('#audioPage').removeClass('audioBG')
        $('#audioResume').removeClass('displayNone')
        $('#audioResume').addClass('display')
        $('#videoResume').removeClass('display')
        $('#videoResume').addClass('displayNone')
        $('#featureVideo').removeClass('displayNone')
        $('#featureVideo').addClass('display')
    }
    else if(($('#videoPage').hasClass('col-md-10'))&&($('#audioPage').hasClass('col-md-2'))){
        $('#audioPage').addClass('audioBG')
        $('#audioResume').removeClass('display')
        $('#audioResume').addClass('displayNone')
        $('#videoResume').removeClass('displayNone')
        $('#videoResume').addClass('display')
        $('#featureVideo').removeClass('display')
        $('#featureVideo').addClass('displayNone')
    }
}
function openVideoPage(tag){
 $(tag).click(()=>{
    if($('#videoPage').hasClass('col-md-2')){
        $('#videoPage').removeClass('col-md-2')
        $('#videoPage').addClass('col-md-10')
        $('#audioPage').removeClass('col-md-10 col-md-6')
        $('#audioPage').addClass('col-md-2')
        slideView()
    }
     else if($('#videoPage').hasClass('col-md-10')){
         $('#videoPage').removeClass('col-md-10')
         $('#videoPage').addClass('col-md-6')
         $('#audioPage').removeClass('col-md-10 col-md-2')
         $('#audioPage').addClass('col-md-6')
         slideView()
    }
    else if($('#videoPage').hasClass('col-md-6')){
        $('#videoPage').removeClass('col-md-6')
        $('#videoPage').addClass('col-md-10')
        $('#audioPage').removeClass('col-md-6 col-md-10')
        $('#audioPage').addClass('col-md-2')
        slideView()
    }
 })
}
function openAudioPage(tag){
 $(tag).click(()=>{
    if($('#audioPage').hasClass('col-md-2')){
        $('#videoPage').removeClass('col-md-10 col-md-6')
        $('#videoPage').addClass('col-md-2')
        $('#audioPage').removeClass('col-md-2')
        $('#audioPage').addClass('col-md-10')
        slideView()
    }
     else if($('#audioPage').hasClass('col-md-10')){
        $('#audioPage').removeClass('col-md-10')
        $('#audioPage').addClass('col-md-6')
        $('#videoPage').removeClass('col-md-10 col-md-2')
        $('#videoPage').addClass('col-md-6')
        slideView()
    }
    else if($('#audioPage').hasClass('col-md-6')){
        $('#videoPage').removeClass('col-md-6 col-md-10')
        $('#videoPage').addClass('col-md-2')
        $('#audioPage').removeClass('col-md-6')
        $('#audioPage').addClass('col-md-10')
        slideView()
    }
 })
}
function resetPage(tag){
 $(tag).click(()=>{
        $('#audioPage').removeClass('col-md-10 col-md-2')
        $('#audioPage').addClass('col-md-6')
        $('#videoPage').removeClass('col-md-10 col-md-2')
        $('#videoPage').addClass('col-md-6')
        slideView()
    })
}
function enlargeVideo(id){
    $('#video1').addClass('videoHeight')
}
function viewAboutUs(){
    $('body').click(function(evt){    
        if(evt.target.id == "aboutUsLink"){
            if($('#aboutUsContent').hasClass('displayNone')){
                evt.preventDefault()
                $('#aboutUsContent').removeClass('displayNone')
                $('#videoWords').removeClass('videoTexVert')
                $('#videoWords').addClass('videoTextHor')
                $('.audioWords').removeClass('audioTexVert')
                $('.audioWords').addClass('audioTextHor')
                $('#contactForm').addClass('displayNone')
                return;   
            }
           else{
               evt.preventDefault()
               $('#aboutUsContent').addClass('displayNone')
               $('#videoWords').removeClass('videoTextHor')
               $('#videoWords').addClass('videoTextVert')
               $('.audioWords').removeClass('audioTextHor')
               $('.audioWords').addClass('audioTextVert')
            } 
        }        
        else{
            $('#aboutUsContent').addClass('displayNone')
            $('#videoWords').removeClass('videoTextHor')
            $('#videoWords').addClass('videoTextVert')
            $('.audioWords').removeClass('audioTextHor')
            $('.audioWords').addClass('audioTextVert')
        }
 });
}
function viewAboutContact(){
    var element = document.getElementById('contactForm')
    $('body').click(function(evt){    
        if((evt.target.id == 'contactMe')){
            if($('#contactForm').hasClass('displayNone')){
                evt.preventDefault()
                $('#contactForm').removeClass('displayNone')
                $('#videoWords').removeClass('videoTexVert')
                $('#videoWords').addClass('videoTextHor')
                $('.audioWords').removeClass('audioTexVert')
                $('.audioWords').addClass('audioTextHor')
                return;   
            }
           else{
               evt.preventDefault()
               $('#contactForm').addClass('displayNone')
               $('#videoWords').removeClass('videoTextHor')
               $('#videoWords').addClass('videoTextVert')
               $('.audioWords').removeClass('audioTextHor')
               $('.audioWords').addClass('audioTextVert')

                } 
        }
        else if(element.contains(evt.target)){
            if($('#contactForm').hasClass('displayNone')){
                $('#contactForm').removeClass('displayNone')
                $('#videoWords').removeClass('videoTexVert')
                $('#videoWords').addClass('videoTextHor')
                $('.audioWords').removeClass('audioTexVert')
                $('.audioWords').addClass('audioTextHor')
                return;   
            }
            else{
                $('#videoWords').removeClass('videoTexVert')
                $('#videoWords').addClass('videoTextHor')
                $('.audioWords').removeClass('audioTexVert')
                $('.audioWords').addClass('audioTextHor')
            }
        }        
        else if(!$('#aboutUsContent').hasClass('displayNone')){
                $('#videoWords').removeClass('videoTexVert')
                $('#videoWords').addClass('videoTextHor')
                $('.audioWords').removeClass('audioTexVert')
                $('.audioWords').addClass('audioTextHor')
        }
        else{
            $('#contactForm').addClass('displayNone')
            $('#videoWords').removeClass('videoTextHor')
            $('#videoWords').addClass('videoTextVert')
            $('.audioWords').removeClass('audioTextHor')
            $('.audioWords').addClass('audioTextVert')
        }
 });
}

function logoVideo(){
    $('.logoVid').click(()=>{
        $('#logoBox').addClass('displayNone')
    })
    $('#logoBox').delay(4000).fadeOut()
}
$(document).ready(function() { 
    openAudioPage('#audioText')
    openVideoPage('.homeVideo')
    openVideoPage('#featureVideo')
    openVideoPage('#videoIntro')
    openVideoPage('#videoWords')
    openAudioPage('#audioPage')
    resetPage('.navbar') 
    resetPage('.nav-item') 
    logoVideo()
    viewAboutUs()
    viewAboutContact()
});

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
