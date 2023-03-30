export function linkfn(){
//   <meta content="FarmSolutions" name="description">
    const  metadesc = document.createElement('meta');
    metadesc.name="description";
    metadesc.content = "FarmSolutions";
    document.getElementsByTagName('head')[0].appendChild(metadesc);

//   <meta content="FarmSolutions" name="keywords">
    const  metakeywd = document.createElement('meta');
    metakeywd.name="keywords";
    metakeywd.content = "FarmSolutions";
    document.getElementsByTagName('head')[1].appendChild(metakeywd);
//   <!-- Favicons -->
//   <link href="./assets/img/favicon.png" rel="icon">
    const  link = document.createElement('link');
    link.rel = "icon";
    link.href = "https://farmsolutions-f9ab9.web.app/resources/images/logosq.svg";
    document.getElementsByTagName('head')[2].appendChild(link);
//   <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon"></link>
    const  link2 = document.createElement('link');
    link2.rel = "apple-touch-icon";
    link2.href = "https://farmsolutions-f9ab9.web.app/resources/images/logosq.svg";
    document.getElementsByTagName('head')[3].appendChild(link2);
}
linkfn();

// bluebd =document.getElementsByTagName('body');
// bluebd.style = "body-background:blue"

// function test()
// {
//     var element = document.createElement("div");
//     element.appendChild(document.createTextNode('The man who mistook his wife for a hat'));
//     document.getElementbyId('lc').appendChild(element);
//     //docu1ment.body.appendChild(element);
// }
// myAnchor.setAttribute("href", "https://www.w3schools.com");