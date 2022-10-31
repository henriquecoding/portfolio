const slideValue = document.querySelector('#slider-entity');
const inputSlider = document.querySelector('#slider-works');

inputSlider.oninput = ( ()=> {
  let value = inputSlider.value;
  slideValue.textContent = value;
  slideValue.style.left = (value/2) + "%";
  slideValue.classList.add('show-content');
  const valueContainer = document.querySelector('.value-container');
  
  if(value == 1) {
    slideValue.textContent = 'Freelancer';
    const layout = `
    <div class="result-work">
      <h2 class="entity-work">Freelancer</h2>
          
      <p><em class="entityWork-title">Designer gráfico (fev. 2018 - atualmente)</em></p>

      <p class="entity-details">Em meu tempo livre aprimoro minhas habilidades de designer e crio projetos de acordo com as necessidades que me foram passadas. Com isso já fiz publicidades para empresas e rebranding de coisas já existentes</p>
    </div>
    `;
    valueContainer.innerHTML = layout;
  } else if(value == 2) {
    slideValue.textContent = 'Sabores da Rainha';
    layout = `
    <div class="result-work">
      <h2 class="entity-work">Sabores da Rainha</h2>
          
      <p><em class="entityWork-title">Administração (jun 2018 - nov 2018)</em></p>

      <p class="entity-details">Vim do Brasil para ajudar minha mãe em seu restaurante.
      Atendimento aos clientes | caixa | administração | criação de anúncios e responsável pelo marketing | reposição de estoque.</p>
    </div> 
    `
    valueContainer.innerHTML = layout;
  } else if(value == 3) {
    slideValue.textContent = 'Group Rolo';
    layout = `
    <div class="result-work">
      <h2 class="entity-work">Group Rolo</h2>
          
      <p><em class="entityWork-title">Auxiliar de Fabrico (nov 2018 - ago 2020)</em></p>

      <p class="entity-details">Preparação de massa | preparação de cremes | manuseio de massa crua e sua moldagem para produto final | controle de estufa e cozimento | recheio de produtos | confecção e finalização | embalamento | montagem de paletes | manuseio de máquinas industriais.</p>

      <a class="meet-entity" target="_blank" href="https://pastelariarolo.pt/">Sobre a Entidade</a>
    </div> 
    `
    valueContainer.innerHTML = layout;
  } else if(value == 4) {
    slideValue.textContent = 'Nespa';
    layout = `
    <div class="result-work">
      <h2 class="entity-work">Nespa</h2>
          
      <p><em class="entityWork-title">Operador de Máquinas | <br> Produção (abr 2021 - fev 2022)</em></p>

      <p class="entity-details">Manuseio de massa crua e sua moldagem para produto final | recheio de produtos | confecção e finalização | embalagem | montagem de paletes | operar máquinas industriais | responsável pelas pesagens e testes de qualidade.</p>

      <a class="meet-entity" target="_blank" href="http://www.nespa.pt/">Sobre a Entidade</a>
    </div> 
    `
    valueContainer.innerHTML = layout;
  } else {
    slideValue.textContent = 'Schaeffler';
    layout = `
    <div class="result-work">
      <h2 class="entity-work">Schaeffler</h2>
          
      <p><em class="entityWork-title">Operador de Máquinas | <br> Produção (fev 2022 - atualmente)</em></p>

      <p class="entity-details">Afinação/montagem de máquinas industriais | produção de anéis de rolamentos | verificação e certificação da qualidade dos anéis produzidos.</p>

      <a class="meet-entity" target="_blank" href="https://www.schaeffler.es/pt/">Sobre a Entidade</a>
    </div>  
    `
    valueContainer.innerHTML = layout;
  }
  
});

inputSlider.onblur = (()=>{
slideValue.classList.remove("show-content");
});