export const User_data = {
    el: document.querySelector("main div"),
    data() {
        const articles = [{
            id: "article-poo",
            title: "Php and POO",
            content: "La programmation orientée objet (POO) est devenue indispensable, oui, mais pourquoi ? Parce qu'elle permet une meilleure organisation de vos projets, facilite la maintenance de votre code, et offre une grande souplesse pour faire évoluer votre logiciel sans avoir à tout réécrire",
            link: "https://openclassrooms.com/fr/courses/1665806-programmez-en-oriente-objet-en-php/7306872-decouvrez-les-objets-et-les-classes"
        }, {
            id: "article-php",
            title: "Php and Laravel",
            content: "Laravel est un framework web open-source écrit en PHP respectant le principe modèle-vue-contrôleur et entièrement développé en programmation orientée objet. Laravel est distribué sous licence MIT, avec ses sources hébergées sur GitHub",
            link: "https://fr.wikipedia.org/wiki/Laravel"
        }, {
            id: "article-node",
            title: "Node js",
            content: "Node.js est une plateforme logicielle libre en JavaScript, orientée vers les applications réseau évènementielles hautement concurrentes qui doivent pouvoir monter en charge.",
            link: "https://fr.wikipedia.org/wiki/Node.js"
        }];
        for (let article of articles) {
            // console.table(data.id + "\n" + data.title + "\n" + data.link);
            this.el.innerHTML += `
            <ul id="${article.id}">
                <li>
                    <h2>${article.title}</h2>
                </li>
                <li>
                    <p>${article.content}</p>
                </li>
                <li>
                    <a href=${article.link} target="blank">Plus sur le sujet &raquo;</a>
                </li>
            </ul>`;
        }
    }
};

/*{ <ul id="article-poo"> 
                <li>
                    <h2>📝 Php and POO</h2>
                </li>
                <li>
                    <p>La programmation orientée objet (POO) est devenue indispensable, oui, mais pourquoi ? Parce qu'elle permet une meilleure organisation de vos projets, facilite la maintenance de votre code, et offre une grande souplesse pour faire évoluer votre logiciel sans avoir à tout réécrire</p>
                </li>
                <li>
                    <a href="" target="blank">
                        Plus sur le sujet &raquo;
                    </a>
            
                </li>
            </ul> }*/