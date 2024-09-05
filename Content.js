let imageArray = [
    "https://cdn.racingnews365.com/2024/Norris/_1092x683_crop_center-center_85_none/12850981/XPB_1265005_HiRes.webp?v=1709841631",
    "https://robbreport.com/wp-content/uploads/2024/02/RR_2024_F1_Car_Roundup_Red_Bull_RB20.jpg?w=1024",
    "https://ichef.bbci.co.uk/news/976/cpsprodpb/14122/production/_132601228_williamsf1.jpg.webp"
];

const imgs = document.getElementsByTagName("img");
for (let i = 0;i < imgs.length;i++){
    const randImg = Math.floor(Math.random() * imageArray.length); //Random index of imageArray

    imgs[i].src = imageArray[randImg];                             //Replace src address
}

const hdrs1 = document.getElementsByTagName("h1");
for (let i = 0;i < hdrs1.length;i++){
    hdrs1[i].innerText = "F1";                         //Replace src address
}

const hdrs2 = document.getElementsByTagName("h2");
for (let i = 0;i < hdrs2.length;i++){
    hdrs2[i].innerText = "F1";                         //Replace src address
}

const p = document.getElementsByTagName("h2");
for (let i = 0;i < p.length;i++){
    p[i].innerText = "F1";                         //Replace src address
}