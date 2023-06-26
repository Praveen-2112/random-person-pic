var btn=document.getElementById("detail")

var person=[{
    pic:"image/pic.jpg",
    name:"vijai",
    details:"Vijay had a sister, Vidhya, who died when she was just two years old. Initially attending Fathima Matriculation Higher Secondary School at Kodambakkam, Vijay later joined the Balalok Matriculation Higher Secondary School at Virugambakkam and went on to pursue a degree in Visual Communications from Loyola College."
},
{
    pic:"image/pic-1.jpg",
    name:"Ajith",  
    details:"Ajith Kumar (born 1 May 1971) is an Indian actor who works predominantly in Tamil cinema. To date, he has starred in over 61 films, and his awards include four Vijay Awards, three Cinema Express Awards, three Filmfare Awards South and three Tamil Nadu State Film Awards."
},
{
    pic:"image/pic-2.jpg",
    name:"suriya", 
    details:"Suriya was born as Saravanan on 23 July 1975 in Madras (now Chennai), Tamil Nadu, to actor Sivakumar and his wife Lakshmi. He attended Padma Seshadri Bala Bhavan School and St. Bede's Anglo Indian Higher Secondary School in Chennai, and obtained his under graduate degree B.Com from Loyola College, Chennai."
}
]

btn.addEventListener("click",function(){

    var num=Math.round(Math.random()*3);
    photo.src=person[num].pic;
    
    var para =document.getElementById("line");
    para.innerHTML=person[num].name;
    para.style.fontWeight="bold";
    para.style.padding="10px";
    para.style.paddinLeft="0px";


    var para1=document.getElementById("line1");
    para1.innerHTML=person[num].details;
    para1.style.marginBottom="15px";
})