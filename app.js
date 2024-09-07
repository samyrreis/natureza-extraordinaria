function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
      section.innerHTML = "<p class='nao-encontrado' >Nada foi encontrado. Você precisa digitar o nome de um fenômeno. </p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados formatados em HTML
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = ""; 
  
  
    // Itera sobre cada item de dado e constrói o HTML correspondente
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.join(", ").toLowerCase()
      
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais Informações</a>
        </div>
      `;

      }
      
    }
  
    if (!resultados){
      resultados = "<p class='nao-encontrado'>Nenhum fenômeno encontrado.</p>"

    }
    // Atualiza o conteúdo HTML da seção com os resultados construídos
    section.innerHTML = resultados;
  }
