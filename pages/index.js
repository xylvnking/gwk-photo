import Head from 'next/head'
import Image from 'next/image'
import Albums from '../Components/Albums'
import Hero from '../Components/Hero'
// import styles from '../styles/Home.module.css'


export const albums = {
    exteriors : 
        [
            {
                albumName: 'albumName1',
                category: 'exteriors',
                thumbnailURL: 'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665638020/GWK/xylvn_exterior_of_a_newly_built_modern_single_family_home_ca08aa61-9769-409a-ad8c-a8dd7a355207_fgc679.png',
                thumbnailURLLowQ: 'https://res.cloudinary.com/deqrwzr3q/image/upload/c_thumb,w_200,g_face/v1665638637/GWK/xylvn_exterior_of_a_newly_built_modern_single_family_home_5e377c7c-bac5-421e-9c66-4e4e0adb4f7e_wlcrfn.png',
                // photoURLs: [
                //     'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665616717/GWK/house1_gckawh.png', 
                //     'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665618141/GWK/spacejoy-9M66C_w_ToM-unsplash_byimty.jpg', 
                //     'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665619943/GWK/hero1.jpg'
                // ],
                photoURLs: [
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/c_thumb,w_200,g_face/v1665638637/GWK/xylvn_exterior_of_a_newly_built_modern_single_family_home_5e377c7c-bac5-421e-9c66-4e4e0adb4f7e_wlcrfn.png', 
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/c_thumb,w_200,g_face/v1665638081/GWK/xylvn_a_newly_built_modern_single_family_home_detailed_56697502-aea1-4d36-bc19-d9ff5552094b_iy4aem.png', 
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665619943/GWK/hero1.jpg'
                ],
                description: 'Hammock fashion axe gochujang, woke locavore mlkshk street art unicorn four loko schlitz squid. Lumbersexual 8-bit jianbing shabby chic JOMO snackwave. Woke locavore mlkshk street art unicorn four loko schlitz squid.',

            },
            {
                albumName: 'albumName2',
                category: 'exteriors',
                thumbnailURL: 'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665637159/GWK/xylvn_exterior_of_a_newly_built_modern_single_family_home_73dc62ba-4b56-4c4b-99b5-c5cf8e31e58b_kttnxy.png',
                thumbnailURLLowQ: 'https://res.cloudinary.com/deqrwzr3q/image/upload/c_thumb,w_200,g_face/v1665638637/GWK/xylvn_exterior_of_a_newly_built_modern_single_family_home_5e377c7c-bac5-421e-9c66-4e4e0adb4f7e_wlcrfn.png',
                // photoURLs: [
                //     'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665616717/GWK/house1_gckawh.png', 
                //     'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665618141/GWK/spacejoy-9M66C_w_ToM-unsplash_byimty.jpg', 
                //     'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665619943/GWK/hero1.jpg'
                // ],
                photoURLs: [
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/c_thumb,w_200,g_face/v1665638637/GWK/xylvn_exterior_of_a_newly_built_modern_single_family_home_5e377c7c-bac5-421e-9c66-4e4e0adb4f7e_wlcrfn.png', 
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/c_thumb,w_200,g_face/v1665638081/GWK/xylvn_a_newly_built_modern_single_family_home_detailed_56697502-aea1-4d36-bc19-d9ff5552094b_iy4aem.png', 
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665619943/GWK/hero1.jpg'
                ],
                description: 'JOMO mixtape migas mukbang sus. YOLO kickstarter aesthetic asymmetrical, trust fund messenger bag squid thundercats drinking vinegar big mood farm.',

            },
            {
                albumName: 'albumName3',
                category: 'exteriors',
                // thumbnailURL: 'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665637101/GWK/xylvn_exterior_of_a_newly_built_modern_single_family_home_8fa75b69-512f-49ca-875f-433a9d57601a_mob8cy.png',
                thumbnailURL: 'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665637101/GWK/xylvn_exterior_of_a_newly_built_modern_single_family_home_8fa75b69-512f-49ca-875f-433a9d57601a_mob8cy.png',
                thumbnailURLLowQ: 'https://res.cloudinary.com/deqrwzr3q/image/upload/c_thumb,w_200,g_face/v1665638637/GWK/xylvn_exterior_of_a_newly_built_modern_single_family_home_5e377c7c-bac5-421e-9c66-4e4e0adb4f7e_wlcrfn.png',
                // photoURLs: [
                //     'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665616717/GWK/house1_gckawh.png', 
                //     'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665618141/GWK/spacejoy-9M66C_w_ToM-unsplash_byimty.jpg', 
                //     'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665619943/GWK/hero1.jpg'
                // ],
                photoURLs: [
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/c_thumb,w_200,g_face/v1665638637/GWK/xylvn_exterior_of_a_newly_built_modern_single_family_home_5e377c7c-bac5-421e-9c66-4e4e0adb4f7e_wlcrfn.png', 
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/c_thumb,w_200,g_face/v1665638081/GWK/xylvn_a_newly_built_modern_single_family_home_detailed_56697502-aea1-4d36-bc19-d9ff5552094b_iy4aem.png', 
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665619943/GWK/hero1.jpg'
                ],
                description: ' Pork belly keytar jean shorts, wolf migas succulents pop-up offal taxidermy hoodie pitchfork williamsburg lumbersexual. Lo-fi put a bird on it echo park before they sold out.',

            },
            {
                albumName: 'albumName4',
                category: 'exteriors',
                thumbnailURL: 'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665638637/GWK/xylvn_exterior_of_a_newly_built_modern_single_family_home_5e377c7c-bac5-421e-9c66-4e4e0adb4f7e_wlcrfn.png',
                thumbnailURLLowQ: 'https://res.cloudinary.com/deqrwzr3q/image/upload/c_thumb,w_200,g_face/v1665638637/GWK/xylvn_exterior_of_a_newly_built_modern_single_family_home_5e377c7c-bac5-421e-9c66-4e4e0adb4f7e_wlcrfn.png',
                // photoURLs: [
                //     'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665616717/GWK/house1_gckawh.png', 
                //     'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665618141/GWK/spacejoy-9M66C_w_ToM-unsplash_byimty.jpg', 
                //     'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665619943/GWK/hero1.jpg'
                // ],
                photoURLs: [
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/c_thumb,w_200,g_face/v1665638637/GWK/xylvn_exterior_of_a_newly_built_modern_single_family_home_5e377c7c-bac5-421e-9c66-4e4e0adb4f7e_wlcrfn.png', 
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/c_thumb,w_200,g_face/v1665638081/GWK/xylvn_a_newly_built_modern_single_family_home_detailed_56697502-aea1-4d36-bc19-d9ff5552094b_iy4aem.png', 
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665619943/GWK/hero1.jpg'
                ],
                description: 'Food truck schlitz man braid actually knausgaard you probably havent heard of them direct trade next level semiotics +1. Cloud bread gochujang raclette +1, hexagon fit.',

            },
            {
                albumName: 'albumName5',
                category: 'exteriors',
                thumbnailURL: 'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665638081/GWK/xylvn_a_newly_built_modern_single_family_home_detailed_56697502-aea1-4d36-bc19-d9ff5552094b_iy4aem.png',
                thumbnailURLLowQ: 'https://res.cloudinary.com/deqrwzr3q/image/upload/c_thumb,w_200,g_face/v1665638637/GWK/xylvn_exterior_of_a_newly_built_modern_single_family_home_5e377c7c-bac5-421e-9c66-4e4e0adb4f7e_wlcrfn.png',
                // photoURLs: [
                //     'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665616717/GWK/house1_gckawh.png', 
                //     'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665618141/GWK/spacejoy-9M66C_w_ToM-unsplash_byimty.jpg', 
                //     'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665619943/GWK/hero1.jpg'
                // ],
                photoURLs: [
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/c_thumb,w_200,g_face/v1665638637/GWK/xylvn_exterior_of_a_newly_built_modern_single_family_home_5e377c7c-bac5-421e-9c66-4e4e0adb4f7e_wlcrfn.png', 
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/c_thumb,w_200,g_face/v1665638081/GWK/xylvn_a_newly_built_modern_single_family_home_detailed_56697502-aea1-4d36-bc19-d9ff5552094b_iy4aem.png', 
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665619943/GWK/hero1.jpg'
                ],
                description: 'Tattooed raw denim prism kombucha, cold-pressed pinterest pork belly. Hella pok pok disrupt bushwick art party, tattooed pickled af yuccie VHS jianbing microdosing. Tattooed raw denim prism kombucha, cold-pressed pinterest pork belly. Hella pok pok disrupt bushwick art party, tattooed pickled af yuccie VHS jianbing microdosing.',

            },
            {
                albumName: 'albumName6',
                category: 'exteriors',
                thumbnailURL: 'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665616717/GWK/house1_gckawh.png',
                thumbnailURLLowQ: 'https://res.cloudinary.com/deqrwzr3q/image/upload/c_thumb,w_200,g_face/v1665638637/GWK/xylvn_exterior_of_a_newly_built_modern_single_family_home_5e377c7c-bac5-421e-9c66-4e4e0adb4f7e_wlcrfn.png',
                // photoURLs: [
                //     'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665616717/GWK/house1_gckawh.png', 
                //     'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665618141/GWK/spacejoy-9M66C_w_ToM-unsplash_byimty.jpg', 
                //     'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665619943/GWK/hero1.jpg'
                // ],
                photoURLs: [
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/c_thumb,w_200,g_face/v1665638637/GWK/xylvn_exterior_of_a_newly_built_modern_single_family_home_5e377c7c-bac5-421e-9c66-4e4e0adb4f7e_wlcrfn.png', 
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/c_thumb,w_200,g_face/v1665638081/GWK/xylvn_a_newly_built_modern_single_family_home_detailed_56697502-aea1-4d36-bc19-d9ff5552094b_iy4aem.png', 
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665619943/GWK/hero1.jpg'
                ],
                description: 'Street art bitters PBR&B, affogato bruh yes plz slow-carb bicycle rights intelligentsia. Glossier banjo skateboard portland iPhone hexagon fam messenger',

            }
        ],
    interiors : 
        [
            {
                albumName: 'albumName7',
                category: 'interiors',
                thumbnailURL: 'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665636084/GWK/naomi-hebert-MP0bgaS_d1c-unsplash_zrblnm.jpg',
                thumbnailURLLowQ: 'https://res.cloudinary.com/deqrwzr3q/image/upload/c_thumb,w_200,g_face/v1665638696/GWK/xylvn_interior_of_a_newly_built_modern_single_family_home_e3a7efff-7790-4a1f-938b-d5386c4495db_afn0hd.png',
                photoURLs: [
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665616717/GWK/house1_gckawh.png', 
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665618141/GWK/spacejoy-9M66C_w_ToM-unsplash_byimty.jpg', 
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665619943/GWK/hero1.jpg'
                ],
                description: 'Hammock fashion axe gochujang, woke locavore mlkshk street art unicorn four loko schlitz squid. Lumbersexual 8-bit jianbing shabby chic JOMO snackwave. Woke locavore mlkshk street art unicorn four loko schlitz squid.',

            },
            {
                albumName: 'albumName8',
                category: 'interiors',
                thumbnailURL: 'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665618141/GWK/spacejoy-9M66C_w_ToM-unsplash_byimty.jpg',
                thumbnailURLLowQ: 'https://res.cloudinary.com/deqrwzr3q/image/upload/c_thumb,w_200,g_face/v1665638696/GWK/xylvn_interior_of_a_newly_built_modern_single_family_home_e3a7efff-7790-4a1f-938b-d5386c4495db_afn0hd.png',
                photoURLs: [
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665616717/GWK/house1_gckawh.png', 
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665618141/GWK/spacejoy-9M66C_w_ToM-unsplash_byimty.jpg', 
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665619943/GWK/hero1.jpg'
                ],
                description: 'JOMO mixtape migas mukbang sus. YOLO kickstarter aesthetic asymmetrical, trust fund messenger bag squid thundercats drinking vinegar big mood farm.',

            },
            {
                albumName: 'albumName9',
                category: 'interiors',
                thumbnailURL: 'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665638696/GWK/xylvn_interior_of_a_newly_built_modern_single_family_home_e3a7efff-7790-4a1f-938b-d5386c4495db_afn0hd.png',
                thumbnailURLLowQ: 'https://res.cloudinary.com/deqrwzr3q/image/upload/c_thumb,w_200,g_face/v1665638696/GWK/xylvn_interior_of_a_newly_built_modern_single_family_home_e3a7efff-7790-4a1f-938b-d5386c4495db_afn0hd.png',
                photoURLs: [
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665616717/GWK/house1_gckawh.png', 
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665618141/GWK/spacejoy-9M66C_w_ToM-unsplash_byimty.jpg', 
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665619943/GWK/hero1.jpg'
                ],
                description: ' Pork belly keytar jean shorts, wolf migas succulents pop-up offal taxidermy hoodie pitchfork williamsburg lumbersexual. Lo-fi put a bird on it echo park before they sold out.',

            },
            {
                albumName: 'albumName10',
                category: 'interiors',
                thumbnailURL: 'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665638433/GWK/xylvn_interior_of_a_newly_built_modern_single_family_home_2df51ea8-93a5-4c97-a83f-9b3e8dcb039c_rnt4jp.png',
                thumbnailURLLowQ: 'https://res.cloudinary.com/deqrwzr3q/image/upload/c_thumb,w_200,g_face/v1665638696/GWK/xylvn_interior_of_a_newly_built_modern_single_family_home_e3a7efff-7790-4a1f-938b-d5386c4495db_afn0hd.png',
                photoURLs: [
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665616717/GWK/house1_gckawh.png', 
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665618141/GWK/spacejoy-9M66C_w_ToM-unsplash_byimty.jpg', 
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665619943/GWK/hero1.jpg'
                ],
                description: 'Food truck schlitz man braid actually knausgaard you probably havent heard of them direct trade next level semiotics +1. Cloud bread gochujang raclette +1, hexagon fit.',

            },
            {
                albumName: 'albumName11',
                category: 'interiors',
                thumbnailURL: 'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665638552/GWK/xylvn_interior_of_a_newly_built_modern_single_family_home_4eaf4c3d-fdd1-456f-a43d-7705f5d2b01a_anq6b9.png',
                thumbnailURLLowQ: 'https://res.cloudinary.com/deqrwzr3q/image/upload/c_thumb,w_200,g_face/v1665638696/GWK/xylvn_interior_of_a_newly_built_modern_single_family_home_e3a7efff-7790-4a1f-938b-d5386c4495db_afn0hd.png',
                photoURLs: [
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665616717/GWK/house1_gckawh.png', 
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665618141/GWK/spacejoy-9M66C_w_ToM-unsplash_byimty.jpg', 
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665619943/GWK/hero1.jpg'
                ],
                description: 'Tattooed raw denim prism kombucha, cold-pressed pinterest pork belly. Hella pok pok disrupt bushwick art party, tattooed pickled af yuccie VHS jianbing microdosing. Tattooed raw denim prism kombucha, cold-pressed pinterest pork belly. Hella pok pok disrupt bushwick art party, tattooed pickled af yuccie VHS jianbing microdosing.',

            },
            {
                albumName: 'albumName12',
                category: 'interiors',
                thumbnailURL: 'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665638528/GWK/xylvn_interior_of_a_newly_built_modern_single_family_home_0c151a07-d233-460a-ad28-ea835bf7b69a_kk1boq.png',
                thumbnailURLLowQ: 'https://res.cloudinary.com/deqrwzr3q/image/upload/c_thumb,w_200,g_face/v1665638696/GWK/xylvn_interior_of_a_newly_built_modern_single_family_home_e3a7efff-7790-4a1f-938b-d5386c4495db_afn0hd.png',
                photoURLs: [
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665616717/GWK/house1_gckawh.png', 
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665618141/GWK/spacejoy-9M66C_w_ToM-unsplash_byimty.jpg', 
                    'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665619943/GWK/hero1.jpg'
                ],
                description: 'Street art bitters PBR&B, affogato bruh yes plz slow-carb bicycle rights intelligentsia. Glossier banjo skateboard portland iPhone hexagon fam messenger',

            }
        ],
}



export default function Home() {
    return (
        <div>
            <Head>
                <title>Gordon King Photography</title>
                <meta name="Gordon King Photography" content="Generated by create next app" />
                <link rel="icon" href="favicon.ico?v=1.1" />
            </Head>
            <Hero />
            <Albums albums={albums}/>

            
           
            {/* <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer> */}
        </div>
    )
}
