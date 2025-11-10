// templates.js - versão com 5 imagens distintas por seção
export const templates = (function(){

  function home(){
    return `
      <section class="section hero" aria-labelledby="home-title">
        <div class="left">
          <h1 id="home-title">Tuning Garage — Paixão por carros modificados</h1>
          <p class="helper">Bem-vindo à garagem onde cultura, som, potência e estilo se encontram. Aqui celebramos JDM classics, a precisão alemã e a criatividade da tunagem brasileira — tudo com dicas práticas e explicações didáticas para você que vive a cena.</p>
          <div class="cta">
            <button class="btn" data-link="/jdms" onclick="history.pushState({},'', '/jdms'); window.dispatchEvent(new PopStateEvent('popstate'))">Comece pela JDM!</button>
          </div>
        </div>
        <div class="right" style="max-width:380px">
          <div class="section" style="padding:12px">
            <h3>Dicas rápidas</h3>
            <ul>
              <li>Escolha prioridades: conforto, som, ou performance?</li>
              <li>Modifique com planejamento — segurança em primeiro lugar.</li>
              <li>Documente e compartilhe seus projetos nos eventos locais.</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section" aria-labelledby="about-title">
        <h2 id="about-title">Por que tunar?</h2>
        <p class="helper">Tunar é expressão: é personalizar o carro para refletir gosto, melhorar desempenho ou simplesmente criar um som que arrepia. Seja uma solução estética — como envelopamento — ou uma modificação de motor, cada projeto conta uma história.</p>
      </section>
    `;
  }

  function jdms(){
    const imgs = [
      "https://www.planetcarsz.com/img/carros/2023/03/nissan-skyline-r34-gt-r-v-spec-1999-01-20230326202006-1600x1066.jpg",
      "https://s0.smartresize.com/wallpaper/745/567/HD-wallpaper-mazda-rx-7-red-coupe-tuning-rx-7-sports-cars-japanese-cars-mazda.jpg",
      "https://i.redd.it/l5wlgron0kea1.jpg",
      "https://autoentusiastas.com.br/ae/wp-content/uploads/2021/04/NSX-Senna-creditos-para-Sergio-Castro-Estadao.jpg",
      "https://hips.hearstapps.com/hmg-prod/images/1996-nissan-300zx-rear-652ad756b321e.png?crop=1.00xw:0.760xh;0,0.172xh&resize=980:*"
    ];
    return `
      <section class="section" aria-labelledby="jdms-title">
        <h2 id="jdms-title">JDM — alma japonesa do desempenho</h2>
        <p class="helper">JDM (Japanese Domestic Market) é muito mais que sigla: é uma cultura que deu ao mundo carros que viraram lenda. Pilotos, preparadores de rua e fabricantes encontraram nas pistas e nas estradas estreitas do Japão uma forma de evoluir carros por prazer e performance.</p>

        <h3>Modelos icônicos</h3>
        <div class="feature-grid" style="margin-top:8px">
          <div class="feature jdm"><strong>Nissan Skyline GT-R (R32/R33/R34)</strong><p class="helper">O 'Godzilla' — motor RB26DETT, 6 cilindros em linha e potencial imenso para tuning. Resistente e amado por tuners e preparadores.</p></div>
          <div class="feature jdm"><strong>Toyota Supra (A80)</strong><p class="helper">O 2JZ-GTE é famoso por suportar ganhos de potência enormes com pequenas modificações — por isso é tão cobiçado por quem busca potência pura.</p></div>
          <div class="feature jdm"><strong>Honda NSX</strong><p class="helper">Condução e leveza: um supercar com DNA de pilotagem, muito valorizado por quem procura equilíbrio entre motor e chassi.</p></div>
          <div class="feature jdm"><strong>Mazda RX-7 (FD)</strong><p class="helper">Rotativos e emoção — um carro para quem curte resposta rápida e som único do motor Wankel.</p></div>
        </div>
      </section>

      <section class="section" aria-labelledby="jdms-craft"> <h3 id="jdms-craft">O que os tuners JDM costumam modificar?</h3> <ul> <li>Turbo upgrades e intercooler maiores para ganhos de potência.</li> <li>ECU remap para ajustar injeção e ignição.</li> <li>Sistemas de escape com foco em fluxo e som.</li> <li>Suspensão ajustável para melhorar a dirigibilidade em curvas.</li> <li>Rodas leves e pneus de alta aderência.</li> </ul> <p class="helper">No fim, os JDMs inspiram projetos que buscam performance sem perder a alma do carro.</p> </section>

      <section class="section">
        <h3>Galeria JDM</h3>
        <div class="gallery-grid">
          ${imgs.map(src => `<div class="card-img"><img src="${src}" alt="JDM car"></div>`).join('')}
        </div>
      </section>
    `;
  }

  function alemaes(){
    const imgs = [
      "https://www.motorbiscuit.com/wp-content/uploads/2021/07/GettyImages-586394818-scaled.jpg",
      "https://revistacarro.com.br/wp-content/uploads/2024/03/Audi-2.jpg",
      "https://carjager-dev.mo.cloudinary.net/images/production/CJVYT0908241247PVY-exteriors-NICtSQQCdC7mNwD_v8lt0-m3?tx=w_640",
      "//www.exoticus.com.br/essential/uploads/2023/01/mercedes-amg-gtr-02.jpeg.webp",
    ];
    return `
      <section class="section" aria-labelledby="germ-title">
        <h2 id="germ-title">Carros Alemães — engenharia e presença</h2>
        <p class="helper">A Alemanha construiu uma reputação onde tecnologia, torque controlado e acabamento se unem. O tuning alemão tende a respeitar a integridade do projeto original, buscando upgrades que elevem performance sem sacrificar confiabilidade.</p>

        <div class="feature-grid" style="margin-top:8px">
          <div class="feature germ"><strong>BMW M (M3, M4, M5)</strong><p class="helper">Dinâmica afiada, motores potentes e chassi balanceado — ótimos para quem quer controlar a potência com precisão.</p></div>
          <div class="feature germ"><strong>Audi RS / Quattro</strong><p class="helper">Tração integral e eletrônica sofisticada: muitas modificações focam em diferencial, calibração e injeção para extrair velocidade com segurança.</p></div>
          <div class="feature germ"><strong>Mercedes-AMG / Porsche</strong><p class="helper">Luxo + performance — upgrades costumam incluir calibrações de ECU, sistemas de escape e freios reforçados.</p></div>
        </div>

        <section style="margin-top:12px">
          <h3>Filosofia</h3>
          <p class="helper">Enquanto a cena JDM celebra modificações agressivas, o tuning alemão muitas vezes privilegia a integração entre motor, transmissão e eletrônica, buscando ajustes que entreguem potência de forma previsível e segura.</p>
        </section>
      </section>

      <section class="section">
        <h3>Galeria Alemã</h3>
        <div class="gallery-grid">
          ${imgs.map(src => `<div class="card-img"><img src="${src}" alt="Carro Alemão"></div>`).join('')}
        </div>
      </section>
    `;
  }

 function americanos(){
  const imgs = [
    "https://static0.topspeedimages.com/wordpress/wp-content/uploads/2023/11/2009_chevrolet_corvette-zr1_5v0b6789-27817-scaled.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/1969_Dodge_Charger_%2821572136732%29.jpg/1200px-1969_Dodge_Charger_%2821572136732%29.jpg",
    "https://www.slashgear.com/img/gallery/every-generation-pontiac-firebird-ranked-worst-to-best/l-intro-1693797839.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/d/df/1970_Chevrolet_Chevelle_SS_396_Sport_Coupe%2C_front_left%2C_06-08-2024.jpg",
  ];
  return `
    <section class="section" aria-labelledby="us-title">
      <h2 id="us-title">Carros Americanos — força bruta e presença</h2>
      <p class="helper">Os carros americanos são conhecidos por sua potência e pelo som inconfundível dos motores V8. A cultura automotiva dos EUA valoriza o desempenho em linha reta, o torque abundante e o visual imponente, representando liberdade e personalidade.</p>

      <div class="feature-grid" style="margin-top:8px">
        <div class="feature us"><strong>Ford Mustang</strong><p class="helper">Ícone dos muscle cars, o Mustang une tradição e inovação — ideal para quem busca potência com estilo.</p></div>
        <div class="feature us"><strong>Chevrolet Camaro</strong><p class="helper">Rival histórico do Mustang, o Camaro é símbolo de performance agressiva, visual esportivo e ronco marcante.</p></div>
        <div class="feature us"><strong>Dodge Charger / Challenger</strong><p class="helper">Motores HEMI poderosos e presença intimidadora: pura essência do muscle car americano moderno.</p></div>
      </div>

      <section style="margin-top:12px">
        <h3>Cultura e Filosofia</h3>
        <p class="helper">Nos EUA, a cultura automotiva vai além da pista. Reúne encontros de garagem, corridas de arrancada e personalização extrema. O foco está em potência, som e atitude — transformando cada carro em uma extensão da identidade do dono.</p>
      </section>
    </section>

    <section class="section">
      <h3>Galeria Americana</h3>
      <div class="gallery-grid">
        ${imgs.map(src => `<div class="card-img"><img src="${src}" alt="Carro Americano"></div>`).join('')}
      </div>
    </section>
  `;
}


  function brasil(){
    const imgs = [
      "https://turboclass.com.br/images/anuncio/tc-hm6p787-aceita-troca-carro-fiat-marea-turbo/IMG-20240110-WA0015.jpg",
      "https://i.ytimg.com/vi/2x7i-b1PqhQ/maxresdefault.jpg",
      "https://i.pinimg.com/originals/8f/28/c2/8f28c25de7d374aa006b29164a165cbd.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlnip0t8oJeLV4itWeu5_hA90jtEsgwMMJoA&s",
    ];
    return `
      <section class="section" aria-labelledby="br-title">
        <h2 id="br-title">Tunagem Brasileira — criatividade e adaptação</h2>
        <p class="helper">No Brasil, tunagem é mistura de paixão e improviso criativo. Desde encontros de rua até exposições, a cena nacional destaca projetos que adaptam peças, fazem swaps e criam som que chama atenção por onde passa.</p>

        <div class="feature-grid" style="margin-top:8px">
          <div class="feature br"><strong>Modelos populares</strong><p class="helper">Gol, Saveiro, Uno, Astra, Civic — muitos projetos usam motor AP, swaps e turbos para transformar carros compactos em verdadeiras máquinas.</p></div>
          <div class="feature br"><strong>Adaptações comuns</strong><p class="helper">Som automotivo (falantes e amplificadores), rodas rebaixadas, envelopamento e iluminação customizada.</p></div>
          <div class="feature br"><strong>Eventos</strong><p class="helper">Encontros de carros, campeonatos de som e feiras são palco para trocas de experiência e exposição de projetos.</p></div>
        </div>

        <section style="margin-top:12px">
          <h3>Dicas para quem vai tunar no Brasil</h3>
          <ul>
            <li>Verifique sempre a legalidade das modificações (documentação e segurança).</li>
            <li>Invista em peças de qualidade e mão de obra especializada.</li>
            <li>Planeje o projeto: objetivos claros (som, visual, performance).</li>
          </ul>
        </section>
      </section>

      <section class="section">
        <h3>Galeria BR</h3>
        <div class="gallery-grid">
          ${imgs.map(src => `<div class="card-img"><img src="${src}" alt="Tunagem BR"></div>`).join('')}
        </div>
      </section>
    `;
  }

 function pecas() {
  return `
    <section class="section" aria-labelledby="pecas-title">
      <h2 id="pecas-title">Peças & Funcionamento — explicações que empolgam</h2>
      <p class="helper">Quer entender o que acontece quando você pisa fundo? Nesta seção explicamos, de forma direta e empolgante, como cada peça contribui para o desempenho e o som do carro.</p>
    </section>

    <section class="section part" aria-labelledby="motor-title">
      <div class="icon">
        <img src="https://www.motor.com.co/static/assets/backend/styles/large/public/2025-07/Motor%20m%C3%A1s%20vendido3.jpg?itok=4Ez_9cs8" alt="Motor" width="200">
      </div>
      <div class="desc">
        <h3 id="motor-title">Motor — o coração que pulsa potência</h3>
        <p class="helper">O motor transforma combustível em movimento através do ciclo de quatro tempos: admissão, compressão, combustão e escape. Cada peça — pistões, bielas, comando de válvulas — influencia resposta, torque e som.</p>
        <p class="helper"><strong>Nota rápida:</strong> aumentar fluxo de ar e combustível permite mais potência, mas exige reforços mecânicos e ajuste eletrônico.</p>
      </div>
    </section>

    <section class="section part" aria-labelledby="turbo-title">
      <div class="icon">
        <img src="https://www.turbobrasil.com.br/wp-content/uploads/2023/11/Turbocompressor.jpg" alt="Turbo" width="200">
      </div>
      <div class="desc">
        <h3 id="turbo-title">Turbo — sopro extra de potência</h3>
        <p class="helper">O turbocompressor aproveita os gases de escape para girar uma turbina acoplada a um compressor. O compressor envia mais ar para o motor — mais ar + mais combustível = mais potência. É uma solução compacta e eficiente para aumentar desempenho.</p>
        <p class="helper"><strong>O que sentir:</strong> o famoso "turbo lag" (atraso) em baixos giros e depois uma explosão de resposta quando a turbina pega velocidade — emocionante, quando bem calibrado.</p>
      </div>
    </section>

    <section class="section part" aria-labelledby="super-title">
      <div class="icon">
        <img src="https://quatrorodas.abril.com.br/wp-content/uploads/2017/02/compressor-mecc3a2nico-lysholm-camaro.jpg?quality=70&strip=all&w=720&crop=1" alt="Supercharger" width="200">
      </div>
      <div class="desc">
        <h3 id="super-title">Supercharger — força instantânea</h3>
        <p class="helper">O supercharger (compressor mecânico) é acionado por correia diretamente pelo motor. Resultado: resposta imediata, praticamente sem lag. A contrapartida é consumo e carga mecânica adicional no motor.</p>
        <p class="helper"><strong>Tipos comuns:</strong> roots (tradicional), twin-screw (mais eficiente), centrífugo (compacto e leve).</p>
      </div>
    </section>

    <section class="section part" aria-labelledby="intercooler">
      <div class="icon">
        <img src="https://metalhorse.com.br/media/catalog/product/cache/88044c91915cb48153c264fdd41450a4/i/m/img_5f93192731246_1603475751_1.jpg" alt="Intercooler" width="200">
      </div>
      <div class="desc">
        <h3 id="intercooler">Intercooler — o resfriador de potência</h3>
        <p class="helper">Ar comprimido esquenta; ar quente tem menos densidade — o intercooler resfria esse ar antes que chegue ao motor, aumentando eficiência e prevenindo detonação. Essencial em setups turbocomprimidos.</p>
      </div>
    </section>

    <section class="section part" aria-labelledby="ecu">
      <div class="icon">
        <img src="https://madeforstreet.com.br/wp-content/uploads/2021/02/Entenda-sobre-ECU-MadeForStreet1-775x500.jpg" alt="ECU Tuning" width="200">
      </div>
      <div class="desc">
        <h3 id="ecu">ECU Tuning — cérebro do sistema</h3>
        <p class="helper">A ECU (unidade de controle eletrônico) gerencia injeção, ignição e limites do motor. Um remap/flash bem feito otimiza combustível, pressão de turbo e resposta — parte indispensável quando se aumenta potência.</p>
      </div>
    </section>

    <section class="section" aria-labelledby="escap">
      <div class="icon">
        <img src="https://31b93296e4855c6e.cdn.gocache.net/loja/imagens/full/abafador-luzian-la012-05.png" alt="Escapamento esportivo" width="200">
      </div>
      <div class="desc">
        <h3 id="escap">Escapamento esportivo</h3>
        <p class="helper">Além do som, um escapamento com melhor fluxo reduz contrapressão e pode liberar potência. Mas é preciso balancear ganho de fluxo com normas de ruído e qualidade de construção.</p>
      </div>
    </section>
  `;
}



  function contact(){
    return `
      <section class="section" aria-labelledby="cont-title">
        <h2 id="cont-title">Contato</h2>
        <p class="helper">Tem um projeto? Quer trocar ideia sobre tuning? Envie uma mensagem!</p>
        <form id="contact-form" novalidate>
          <div class="form-row">
            <div style="flex:1" class="field">
              <label class="label">Nome *</label>
              <input class="input" name="name" id="c-name" minlength="3" required>
              <div class="error-msg" data-error-for="name"></div>
            </div>
            <div style="flex:1" class="field">
              <label class="label">E-mail *</label>
              <input class="input" name="email" id="c-email" type="email" required>
              <div class="error-msg" data-error-for="email"></div>
            </div>
          </div>
          <div class="field">
            <label class="label">Mensagem *</label>
            <textarea name="message" id="c-message" rows="5" class="input" minlength="10" required></textarea>
            <div class="error-msg" data-error-for="message"></div>
          </div>
          <button class="btn" type="submit">Enviar</button>
        </form>
        <div id="contact-result" style="margin-top:12px" aria-live="polite"></div>
      </section>
    `;
  }

  function notFound(){
    return `<section class="section"><h2>Página não encontrada</h2><p class="helper">Use o menu para voltar.</p></section>`;
  }

  return { home, jdms, alemaes, americanos, brasil, pecas, contact, notFound };
})();
