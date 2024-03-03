import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="main">
        <div className="info">
            <h1>Eu me chamo Wellington de Matos,<br/>Full-Stack Developer.</h1>
            <p>Seja bem-vindo ao meu portfólio, aqui você encontrará todos os projetos nos quais trabalhei e aqueles nos quais estou trabalhando.</p>          
            <button><a href="https://drive.google.com/file/d/1_1siZ2BgRVySpwthiTf8mtA4PkQFdTDp/view?usp=drive_link" target="_blank">Meu Currículo</a></button>
         </div>
        <img src="/Profile_Main.jpg"/>
    </div>

    <div className="recent">
        <div className="header">
            <h4>Postagens recentes</h4>
            <Link href="/blog">Ver tudo </Link>
        </div>
            
        <div className="posts">
        <div className="post-item">
            <h3>OneBitFlix</h3>
            <div class="info">
                <h5>03 mar 2024</h5>
                <h5>|</h5>
                <h5>Sass, SQL, React, Next.js</h5>
            </div>
            <p>Projeto desenvolvido pela OneBitCode. É um projeto onde carrega tudo o que foi aprendido ao longo do curso de Dev Full-Stack.</p>
        </div>

            <div className="post-item">
                <h3>Criando meu Website</h3>
                <div className="info">
                    <h5>20 fev 2024</h5>
                    <h5>|</h5>
                    <h5>React, Next.JS</h5>
                </div>
                <p>Website onde será alocado meu portfólio e os projetos que estão em desenvolvimento.</p>
            </div>

        </div>
    </div>

    <div className="separator">
        <h4>Trabalhos em destaque</h4>
    </div>

    <div className="featured">
            <div className="item">
                <img src="/Project_Website.png"/>
            <div className="details">
                <h3><a href="/">Website</a></h3>
            <div className="item-info">
                <h4>React</h4>
                <h4>Next.js</h4>
                <div className="socialsProjects">
                <a href="https://github.com/Wellington-Matoss" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
                </a>
               </div>
                <div className="year-badge">2024</div>
            </div>
                <p>Website onde se encontra meu portfólio.</p>
            </div>
            </div>

    </div>
    </div>
  );
}
