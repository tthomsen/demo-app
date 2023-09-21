import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
      </div>

      <div className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non arcu risus quis varius quam quisque. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Et malesuada fames ac turpis egestas sed. Porttitor eget dolor morbi non arcu. Tristique senectus et netus et malesuada fames ac. Orci eu lobortis elementum nibh. Egestas sed sed risus pretium quam vulputate dignissim. Porttitor massa id neque aliquam vestibulum morbi. Venenatis lectus magna fringilla urna porttitor rhoncus dolor. Aliquam eleifend mi in nulla posuere. Mattis nunc sed blandit libero volutpat. Sed viverra tellus in hac habitasse. Nec feugiat in fermentum posuere urna. Varius sit amet mattis vulputate enim nulla. Purus semper eget duis at. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Leo urna molestie at elementum eu facilisis sed. Amet cursus sit amet dictum sit. Felis eget velit aliquet sagittis.
        <br />
        <br />
        A iaculis at erat pellentesque adipiscing. Nulla pharetra diam sit amet nisl. Fames ac turpis egestas sed. Laoreet sit amet cursus sit amet. Mattis aliquam faucibus purus in massa tempor nec feugiat. Turpis egestas pretium aenean pharetra magna ac. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Sed libero enim sed faucibus turpis in. Rhoncus dolor purus non enim praesent elementum facilisis leo. Senectus et netus et malesuada fames ac turpis. Massa sed elementum tempus egestas sed sed risus pretium. Pellentesque nec nam aliquam sem et tortor. Egestas congue quisque egestas diam in arcu. Nulla pharetra diam sit amet. Magna etiam tempor orci eu. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Turpis egestas integer eget aliquet. Vestibulum lectus mauris ultrices eros in cursus turpis massa. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis.
        <br />
        <br />
        Elementum facilisis leo vel fringilla est ullamcorper eget. Non curabitur gravida arcu ac tortor. Neque laoreet suspendisse interdum consectetur libero id. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Et magnis dis parturient montes nascetur ridiculus mus mauris vitae. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Sit amet aliquam id diam maecenas ultricies mi eget mauris. Purus sit amet luctus venenatis lectus. Tellus mauris a diam maecenas. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Viverra vitae congue eu consequat ac felis donec et odio. Nibh tortor id aliquet lectus proin nibh. Aliquam sem fringilla ut morbi tincidunt. Ipsum a arcu cursus vitae congue mauris rhoncus. Ut morbi tincidunt augue interdum velit euismod.
        <br />
        <br />
        Arcu odio ut sem nulla pharetra diam sit amet. Mi ipsum faucibus vitae aliquet nec ullamcorper. Lectus sit amet est placerat in egestas. Tellus in hac habitasse platea dictumst vestibulum rhoncus est. Lacinia quis vel eros donec ac odio tempor orci dapibus. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Morbi tincidunt ornare massa eget egestas purus viverra. Quis viverra nibh cras pulvinar mattis nunc sed blandit. Quam elementum pulvinar etiam non quam lacus. Malesuada fames ac turpis egestas. Aliquam id diam maecenas ultricies mi. Sed nisi lacus sed viverra tellus in hac habitasse platea. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Aliquet lectus proin nibh nisl condimentum. Nibh cras pulvinar mattis nunc. At lectus urna duis convallis convallis tellus id. Nunc id cursus metus aliquam eleifend. Lacus laoreet non curabitur gravida. Massa sed elementum tempus egestas sed.
        <br />
        <br />
        Placerat orci nulla pellentesque dignissim enim sit amet venenatis. Scelerisque varius morbi enim nunc faucibus a pellentesque. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Tellus id interdum velit laoreet. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Tellus orci ac auctor augue. Non blandit massa enim nec dui nunc. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Tellus elementum sagittis vitae et leo duis ut. Mattis rhoncus urna neque viverra justo nec. Suspendisse faucibus interdum posuere lorem ipsum dolor. Mi proin sed libero enim sed faucibus. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl.
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
