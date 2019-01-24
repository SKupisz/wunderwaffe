import React from "react";
import ReactDOM from "react-dom";
import "./movements.js";
import "./styles.css";
function First({ title, author ,id}) {
  return (
    <div class = "firstSlide" id = {id}>
    <header class="mainHeaderFirst">{title}</header>
    <div class = "author">{author}</div>
    </div>
  );
}
function Slide({ title, paragraphs, id})
{
  const listItems = paragraphs.map((paragraph)=>
  <li>{paragraph}</li>);
  return(
    <div class = "contentSlide" id = {id}>
    <header class = "mainHeader">{title}</header>
    <main class = "mainContent">
    <ul>
    {listItems}
    </ul>
    </main>
    </div>
  );
}
function PhotoSlide({title, id, photo})
{
  return (
    <div class="contentSlide photoSlide" id={id}>
      <header class="mainHeader">{title}</header>
      <img src = {photo} class = "photo"/>
    </div>
  );
}
function Ending({title, id})
{
  return(
    <div class = "lastSlide" id = {id}>
    <header class = "mainHeader">{title}</header>
    </div>
  );
}
function Bar({id})
{
  return(
    <div class = "progressBar" id = {id}>
      <div class="goOn"></div>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Bar id="progressBar" />

      <First title = "Wunderwaffe" author = "Szymon Kupisz" id = "s1" class = "silde"/>
      <Slide title="Co to takiego?" paragraphs={[
        "Kraj -> 卐niemcy卐",
        "Nie wymyślone przez nazistów",
      "Powietrzne, wodne, lądowe"]}id = "s2" class = "slide"/>
      <Slide title = "Powietrzne" paragraphs = {[
        "Werner von Braun",
        "Amerika Bomber",
        "Broń masowego rażenia - koncepcja i wdrażanie",
        "Pociski Okha"]}
        id = "s3" class = "slide"/>
      <PhotoSlide title="Fieseler Fi 103" id="s4" photo= "https://dzieje.pl/sites/default/files/styles/open_article_750x0_/public/201308/rakieta_v1.jpg?itok=sJj13seH"/>
      <PhotoSlide title="V2" id="s5" photo= "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Bundesarchiv_Bild_141-1880%2C_Peenem%C3%BCnde%2C_Start_einer_V2.jpg/240px-Bundesarchiv_Bild_141-1880%2C_Peenem%C3%BCnde%2C_Start_einer_V2.jpg"/>
      <PhotoSlide title="Arado Ar E.555" id = "s6" photo= "http://www.kamiennagora.tvkg.net/html/warto/arado/are555-1.gif"/>
      <PhotoSlide title="Horten Ho 229" id="s7" photo= "https://ocdn.eu/pulscms-transforms/1/9qSktkpTURBXy9mOGFlMmM0NDJhM2ZhMmIyYTIxM2IxYWQ2YmI0YTE2NC5qcGeTlQMAAM0HgM0EOJMFzQMUzQG8lQfZMi9wdWxzY21zL01EQV8vMjMzN2M5ZmQ2YjkzMWVlNmNiMGQyM2RjYmEyNThhOWQucG5nAMIA"/>
      <PhotoSlide title="Silbervogel" id="s8" photo= "https://uploads.codesandbox.io/uploads/user/629feadb-484f-465b-8acd-c07f50a2ff04/ocg1-240px-Silbervogel.jpg"/>
      <PhotoSlide title="Broń Słoneczna" id="s9" photo= "https://uploads.codesandbox.io/uploads/user/629feadb-484f-465b-8acd-c07f50a2ff04/8PRe-bron_sloneczna.png"/>
      <PhotoSlide title="Me 163 komet" id="s10" photo="https://uploads.codesandbox.io/uploads/user/629feadb-484f-465b-8acd-c07f50a2ff04/R26f-me163.png"/>
      <PhotoSlide title="Okha" id="s11" photo="http://www.fiddlersgreen.net/aircraft/Yokosuka-Ohka/IMAGES/Yokosuka-Ohka-11.jpg" />
      <Slide title = "Woda" paragraphs = {[
        "Nawodne - Tirpitz, Bismarck",
        "Podwodne - U-booty, kaiteny"
      ]}
      id = "s12" class = "slide"/>
      <PhotoSlide title="Bismarck" id="s13" photo= "https://cdn.britannica.com/s:500x350/50/30450-004-AB076CBC.jpg"/>
      <PhotoSlide title="Tirpitz" id="s14" photo="data:image/jpeg;base64,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" />
      <PhotoSlide title="Graf Zeppelin" id="s15" photo= "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Graf-Zeppelin-2.jpg/240px-Graf-Zeppelin-2.jpg"/>
      <PhotoSlide title="Kaiten" id="s16" photo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/KaitenType1.JPG/240px-KaitenType1.JPG" />
      <Slide title = "Lądowe/Ziemne" paragraphs={[
        "Czołgi ⇒ seria panzerkampfwagen",
        "Działo kolejowe Dora (Schwerer Gustav)",
        "Niektóre budowle – wyspy normandzkie, torpedownie w Bretani"
        ]}
        id = "s17" class = "slide"/>
      <PhotoSlide title="Tiger" id="s18" photo= "https://www.vaterland.pl/pliki/686,3,index_591.jpg" />
      <PhotoSlide title="Panzerkampfwagen VIII maus" id="s19" photo="https://uploads.codesandbox.io/uploads/user/629feadb-484f-465b-8acd-c07f50a2ff04/R3_M-maus.png" />
      <PhotoSlide title="Karl Gerat 040" id="s20" photo= "https://upload.wikimedia.org/wikipedia/commons/3/3b/Karl1.jpg"/>
      <PhotoSlide title="LandKreuzer P-1000 ratte" id="s21" photo="https://2.allegroimg.com/original/0cc63d/83320dd64cb29fe49910d4bf8152" />
      <PhotoSlide title="Działo Dora" id="s22" photo="https://uploads.codesandbox.io/uploads/user/629feadb-484f-465b-8acd-c07f50a2ff04/MAKy-dora.png" />
      <Slide title = "Rola Propagandy" paragraphs = {[
        "Zaaranżowana przez goebbelsa",
        "Od 1939 roku do końca istnienia Rzeszy"
        ]}
        id = "s23" class = "slide"/>
      <PhotoSlide title="Goebbels" id="s24" photo= "https://pbs.twimg.com/media/DE4Loa0XYAUKr2a.jpg"/>
      <Ending title = "Koniec" id = "s25" class = "slide"/>

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
