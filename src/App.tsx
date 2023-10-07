import { OverlayScrollbar } from './overlay-scrollbar'

function App() {
  return (
    <>
      <div style={{ height: '300px' }}>
        <OverlayScrollbar
          contentStyle={{
            display: 'flex',
            flexDirection: 'column-reverse',
            gap: '1rem',
          }}
        >
          {Array(20)
            .fill(0)
            .map((v, i) => (
              <div
                key={i + v}
                style={{ minHeight: '80px', background: 'rgb(49, 101, 49)' }}
              >
                <p style={{ fontSize: '2rem', color: 'white' }}>{i}</p>
              </div>
            ))}
        </OverlayScrollbar>
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          gap: '1rem',
        }}
      >
        <div
          style={{ height: '300px', width: '300px', border: '5px solid black' }}
        >
          <OverlayScrollbar contentStyle={{}}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, ex
            repudiandae omnis, error inventore recusandae vitae ducimus,
            doloribus quis molestiae eaque repellat adipisci ullam nobis
            corporis perferendis magni maiores. Doloremque, distinctio.
            Accusantium eaque doloremque repellat autem ea laboriosam
            voluptatibus, ducimus sapiente nam aut. Molestias quidem quis saepe,
            quibusdam aliquid distinctio vero voluptas, ea doloribus nihil optio
            incidunt rem quaerat quae laudantium, nemo nobis minus provident.
            Doloremque deserunt quo culpa facilis quisquam eveniet illo amet id
            consequatur alias harum, exercitationem deleniti rem, fugiat ea quis
            ullam, voluptatibus minus. Repudiandae, fuga laboriosam, facilis,
            temporibus repellendus accusamus odit itaque error tenetur
            laudantium non officiis. Maxime hic modi obcaecati dolore explicabo
            praesentium odio doloremque vitae omnis distinctio ea atque
            consectetur fugiat sed, officia facere unde optio sapiente dolores
            eius. Nemo nulla maiores est velit, similique, inventore optio
            impedit dolorum sequi neque molestias quaerat quam quod praesentium!
            Repudiandae illum perspiciatis, porro vero nisi sequi repellendus,
            ad inventore excepturi molestiae voluptas repellat nulla placeat
            officia ex beatae! Odit autem enim suscipit maiores officiis
            excepturi dolore! Quibusdam earum eius magni quisquam laborum est
            dolor at, ipsum tempore iusto suscipit! Ad rem quos repudiandae
            corporis velit delectus ipsa, laudantium sit, illo nisi voluptatibus
            perferendis molestias blanditiis distinctio eligendi sapiente,
            asperiores quis minus maxime nostrum! Voluptatem, praesentium
            aspernatur cupiditate deleniti omnis corporis rem iusto ipsum
            suscipit odio inventore, accusamus expedita debitis quis minima
            nostrum perferendis! Nemo molestiae possimus facere in esse qui
            quasi dolorum sed corporis? Numquam minus aliquam ad illum, modi
            consequatur. Consequuntur unde consectetur quidem sequi. Mollitia
            tempora dolor sit ut optio doloremque error, minima consequuntur
            corporis assumenda quo tenetur enim sed ab fugiat quibusdam sequi
            vel! Libero numquam facilis qui similique sequi porro animi, quaerat
            doloribus autem veritatis dolore sapiente repellat ex! Tenetur,
            repellendus suscipit quis maiores sequi possimus unde tempore,
            laborum cum error nesciunt iusto?
          </OverlayScrollbar>
        </div>

        <div style={{ width: '300px', border: '5px solid black' }}>
          <OverlayScrollbar contentStyle={{}}>
            <div style={{ width: '1200px', height: '205px' }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
              porro exercitationem at atque fugiat aperiam, alias quis sint
              accusantium distinctio officia, quaerat aspernatur magni optio
              provident aliquid inventore consectetur quia. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Impedit est expedita
              aliquid ea minima, illo repudiandae, exercitationem doloremque
              eius odio laudantium quidem nemo consectetur? Modi asperiores nam
              voluptatem fugit ab, sunt, cupiditate dicta alias et deleniti sit.
              Ipsam quaerat odio rem accusantium libero blanditiis, sunt
              voluptatum explicabo molestiae sed. Id ab dicta consequuntur
              accusamus porro praesentium officiis cumque eius. Sint ullam
              deleniti saepe explicabo, ab ex eum obcaecati maxime, nisi error
              id nulla amet vel quae illo. Repudiandae, exercitationem quaerat
              quo, nisi modi aliquid in explicabo est nam optio, quidem qui nemo
              cum culpa voluptate fugit praesentium fuga voluptatibus ratione
              doloribus eligendi minima. Sed eius voluptatibus molestiae ipsam
              nobis eveniet. Quidem at dolorem ab ipsam repudiandae, libero
              ratione omnis minus similique fugit quia incidunt corporis
              blanditiis. A aliquid velit ut ipsum quia, eius culpa dignissimos
              dolores quod assumenda consequatur minima in! Quibusdam repellat
              quidem sint possimus aspernatur. Iure quisquam sapiente architecto
              fuga inventore, amet quod illo, recusandae ab sunt necessitatibus
              vero ex exercitationem ea quasi, qui id officiis accusantium minus
              doloremque dolore magnam ut ipsam error! Optio cumque aperiam
              minima odit dolor similique nemo non, facilis ad amet facere qui
              possimus! Impedit voluptate a quod eligendi maiores nostrum error
              magnam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Delectus est, iusto vero nostrum nisi deserunt assumenda dolore
              minima dolor iste perspiciatis exercitationem eius suscipit porro
              quia cupiditate, fugit eaque ea.
            </div>
          </OverlayScrollbar>
        </div>

        <div
          style={{ width: '300px', height: '200px', border: '5px solid black' }}
        >
          <OverlayScrollbar contentStyle={{}}>
            <div
              style={{
                width: '1200px',
                height: '205px',
                display: 'flex',
                flexDirection: 'row-reverse',
              }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
              porro exercitationem at atque fugiat aperiam, alias quis sint
              accusantium distinctio officia, quaerat aspernatur magni optio
              provident aliquid inventore consectetur quia. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Impedit est expedita
              aliquid ea minima, illo repudiandae, exercitationem doloremque
              eius odio laudantium quidem nemo consectetur? Modi asperiores nam
              voluptatem fugit ab, sunt, cupiditate dicta alias et deleniti sit.
              Ipsam quaerat odio rem accusantium libero blanditiis, sunt
              voluptatum explicabo molestiae sed. Id ab dicta consequuntur
              accusamus porro praesentium officiis cumque eius. Sint ullam
              deleniti saepe explicabo, ab ex eum obcaecati maxime, nisi error
              id nulla amet vel quae illo. Repudiandae, exercitationem quaerat
              quo, nisi modi aliquid in explicabo est nam optio, quidem qui nemo
              cum culpa voluptate fugit praesentium fuga voluptatibus ratione
              doloribus eligendi minima. Sed eius voluptatibus molestiae ipsam
              nobis eveniet. Quidem at dolorem ab ipsam repudiandae, libero
              ratione omnis minus similique fugit quia incidunt corporis
              blanditiis. A aliquid velit ut ipsum quia, eius culpa dignissimos
              dolores quod assumenda consequatur minima in! Quibusdam repellat
              quidem sint possimus aspernatur. Iure quisquam sapiente architecto
              fuga inventore, amet quod illo, recusandae ab sunt necessitatibus
              vero ex exercitationem ea quasi, qui id officiis accusantium minus
              doloremque dolore magnam ut ipsam error! Optio cumque aperiam
              minima odit dolor similique nemo non, facilis ad amet facere qui
              possimus! Impedit voluptate a quod eligendi maiores nostrum error
              magnam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Delectus est, iusto vero nostrum nisi deserunt assumenda dolore
              minima dolor iste perspiciatis exercitationem eius suscipit porro
              quia cupiditate, fugit eaque ea. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Dolore eligendi quod earum explicabo
              dolorum iure, dolores rerum eaque rem minima quibusdam non veniam
              maxime placeat. Dolorum aspernatur atque vitae fugiat ad sit
              corrupti vel adipisci optio autem debitis architecto explicabo qui
              tempora nihil, voluptas eos laboriosam sunt. Aliquid recusandae
              possimus quam, obcaecati aspernatur illum placeat eligendi impedit
              tenetur, aperiam assumenda, praesentium itaque repellat? Iusto
              velit natus neque? Vero laboriosam itaque, quia cum aut pariatur
              vel provident odio excepturi aliquam accusamus fugiat ullam dolor
              voluptatum esse blanditiis, quasi sapiente reprehenderit.
              Doloribus optio a veritatis quo unde molestias cumque nihil
              inventore nostrum! Eum maiores dolorem recusandae dolores
              explicabo commodi dolore deleniti? Illo eius sequi quo! Nihil nemo
              tenetur dolor porro ratione odit similique dolorem, quas adipisci
              optio voluptatum provident officia quis eligendi. Qui iusto sit
              cumque perferendis voluptatem totam officia voluptatum, maiores
              repellat quam esse possimus assumenda ducimus aspernatur magnam
              reiciendis! Molestiae maiores ex tempore enim asperiores,
              doloremque similique labore nostrum ab ratione blanditiis eaque
              consequatur exercitationem cumque ullam qui laborum modi? Tempore
              sed perferendis animi assumenda explicabo quos hic ipsa ad
              voluptate ut in esse, deserunt ex, minima optio blanditiis,
              delectus nobis laudantium. Doloribus dolor, unde eum reiciendis
              soluta dolorum magni! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Eaque numquam cupiditate, alias assumenda neque
              reiciendis nemo ipsum consequatur, soluta corporis officia dolores
              corrupti beatae ipsa! Sit ducimus aperiam impedit laborum neque
              aut repellendus quidem accusamus quibusdam ex beatae corporis
              veritatis numquam id officia ab delectus vero aspernatur labore,
              distinctio soluta animi odit atque? Ducimus id nobis corporis
              nostrum incidunt laboriosam placeat quaerat ipsam tempora dolore,
              quae quibusdam, nesciunt quos consequuntur explicabo tenetur at
              sed eligendi maxime! Consectetur id repellendus dolores,
              laboriosam facere dolorem corporis molestias dolore ullam?
              Numquam, quas? Repudiandae temporibus error cumque laboriosam
              ullam ex expedita laborum in et ad reiciendis architecto deleniti
              fuga voluptas, dolor accusamus id similique sapiente corporis
              corrupti. Assumenda ratione, maxime earum blanditiis, esse
              aspernatur alias illo officiis voluptatum architecto tempore, sint
              odio nobis adipisci expedita molestias consequatur perspiciatis!
              Ullam, ad dignissimos totam molestiae, dicta consectetur similique
              sapiente enim veritatis aliquid iusto quisquam! Ducimus, nihil! Et
              aspernatur fuga, ab necessitatibus veniam itaque voluptatibus
              eaque quos? Dolorum eligendi dolorem sequi excepturi facere optio
              minus quasi vero consectetur maxime labore magni in neque
              voluptates praesentium reprehenderit, recusandae obcaecati!
              Numquam enim id ipsam error, provident sit voluptatibus minima
              ratione at, eos cum, sapiente porro architecto excepturi. Iure,
              iste. Illum, quibusdam magnam. Fuga aliquam ratione error dicta
              nam fugit eaque. Impedit soluta repellendus ut unde placeat,
              quaerat, sunt odit illo facilis eum ipsum vel accusamus dicta eius
              ea assumenda autem tempora obcaecati corrupti optio officiis
              laborum similique corporis mollitia. Veniam dolor voluptates culpa
              ullam explicabo voluptate eos! Deserunt deleniti nihil iusto nulla
              sint reiciendis numquam voluptas, sunt odit excepturi
              reprehenderit temporibus qui, unde doloribus molestias?
              Perferendis earum, nemo fuga ducimus reiciendis excepturi
              exercitationem aliquid molestiae ipsam, autem accusamus aperiam
              veritatis at? Laboriosam sit quisquam aut dolorem pariatur, beatae
              mollitia possimus quo odit debitis saepe dolores aliquam enim
              nulla officia?
            </div>
          </OverlayScrollbar>
        </div>
        <div
          style={{ width: '300px', height: '100px', border: '5px solid black' }}
        >
          <OverlayScrollbar
            contentStyle={{
              display: 'flex',
              flexDirection: 'row-reverse',
              gap: '1rem',
            }}
          >
            {Array(20)
              .fill(0)
              .map((v, i) => (
                <div
                  key={i + v + 'a'}
                  style={{
                    flexBasis: '200px',
                    flexShrink: '0',
                    height: '100%',
                    background: 'skyblue',
                  }}
                >
                  <p style={{ fontSize: '2rem' }}>{i}</p>
                </div>
              ))}
          </OverlayScrollbar>
        </div>
      </div>
    </>
  )
}

export default App
