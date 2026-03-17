import {
  Lilita_One,
  Baloo_2,
  Bebas_Neue,
  Anton,
  Luckiest_Guy,
  Poppins,
  Inter,
  Nunito,
  Rubik,
  Fredoka
} from "next/font/google"

const lilita = Lilita_One({ subsets: ["latin"], weight: "400" })
const baloo = Baloo_2({ subsets: ["latin"], weight: "700" })
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" })
const anton = Anton({ subsets: ["latin"], weight: "400" })
const lucky = Luckiest_Guy({ subsets: ["latin"], weight: "400" })

// Modern + Education fonts
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"] })
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] })
const nunito = Nunito({ subsets: ["latin"], weight: ["600", "700"] })
const rubik = Rubik({ subsets: ["latin"], weight: ["500", "600", "700"] })
const fredoka = Fredoka({ subsets: ["latin"], weight: ["500", "600", "700"] })

export default function FontTest() {
  return (
    <div className="space-y-10 p-10 text-5xl mt-32">
      <h1 className={lilita.className}>Lilita One – School Heading (Best)</h1>
      <h1 className={baloo.className}>Baloo 2 – Friendly Education</h1>
      <h1 className={fredoka.className}>Fredoka – Modern + Fun</h1>
      <h1 className={nunito.className}>Nunito – Clean School UI</h1>

      <hr className="my-6 border-gray-300" />

      <h1 className={bebas.className}>Bebas Neue – Hero Title</h1>
      <h1 className={anton.className}>Anton – Strong Bold</h1>
      <h1 className={lucky.className}>Luckiest Guy – Kids Section</h1>

      <hr className="my-6 border-gray-300" />

      <h1 className={poppins.className}>Poppins – Paragraph / UI Text</h1>
      <h1 className={inter.className}>Inter – Modern Professional</h1>
      <h1 className={rubik.className}>Rubik – Balanced Education</h1>
    </div>
  )
}
