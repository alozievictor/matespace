// Import openDB from idb library
import { openDB } from 'idb';

export const posibleMatch = [
    {
        id: 1,
        fullname: "Coman jr",
        phone: "09012345678",
        email: "comanjr@gmail.com",
        gender: "male",
        dob: "December 14th, 1992",
        country: "Nigerian",
        state: "Imo, Owerri",
        address: "8502 Preston Rd. Inglewood, Maine 98380",
        image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
        id: 2,
        fullname: "Amara Okafor",
        phone: "08123456789",
        email: "amaraokafor@gmail.com",
        gender: "female",
        dob: "March 5th, 1995",
        country: "Nigerian",
        state: "Lagos, Lagos",
        address: "12 Victoria Island, Lagos, Nigeria",
        image: "https://images.pexels.com/photos/8926554/pexels-photo-8926554.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
        id: 3,
        fullname: "Emeka Nwosu",
        phone: "08098765432",
        email: "emekanwosu@gmail.com",
        gender: "male",
        dob: "July 20th, 1990",
        country: "Nigerian",
        state: "Abuja, FCT",
        address: "Plot 45 Wuse II, Abuja, Nigeria",
        image: "https://images.pexels.com/photos/5490966/pexels-photo-5490966.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
        id: 4,
        fullname: "Fatima Adamu",
        phone: "07011223344",
        email: "fatimaadamu@gmail.com",
        gender: "female",
        dob: "October 10th, 1988",
        country: "Nigerian",
        state: "Kano, Kano",
        address: "No. 23 Ahmadu Bello Way, Kano, Nigeria",
        image: "https://images.pexels.com/photos/8926719/pexels-photo-8926719.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
        id: 5,
        fullname: "Chinedu Okoro",
        phone: "09087654321",
        email: "chineduokoro@gmail.com",
        gender: "male",
        dob: "January 15th, 1985",
        country: "Nigerian",
        state: "Enugu, Enugu",
        address: "15 Independence Layout, Enugu, Nigeria",
        image: "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
        id: 6,
        fullname: "Blessing Adeleke",
        phone: "08112233445",
        email: "blessingadeleke@gmail.com",
        gender: "female",
        dob: "April 25th, 1993",
        country: "Nigerian",
        state: "Ogun, Abeokuta",
        address: "Plot 8 Oke-Ilewo, Abeokuta, Nigeria",
        image: "https://images.pexels.com/photos/8926640/pexels-photo-8926640.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
        id: 7,
        fullname: "Ifeanyi Chibuike",
        phone: "07099887766",
        email: "ifeanyichibuike@gmail.com",
        gender: "male",
        dob: "June 30th, 1987",
        country: "Nigerian",
        state: "Anambra, Awka",
        address: "Block C Unizik Junction, Awka, Nigeria",
        image: "https://images.pexels.com/photos/5490965/pexels-photo-5490965.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
        id: 8,
        fullname: "Adunni Babalola",
        phone: "09033445566",
        email: "adunnibabalola@gmail.com",
        gender: "female",
        dob: "August 12th, 1991",
        country: "Nigerian",
        state: "Osun, Ile-Ife",
        address: "OAU Campus Road, Ile-Ife, Nigeria",
        image: "https://images.pexels.com/photos/8926698/pexels-photo-8926698.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
        id: 9,
        fullname: "Kingsley Eze",
        phone: "08144556677",
        email: "kingsleyeze@gmail.com",
        gender: "male",
        dob: "November 3rd, 1989",
        country: "Nigerian",
        state: "Rivers, Port Harcourt",
        address: "Mile 3 Diobu, Port Harcourt, Nigeria",
        image: "https://images.pexels.com/photos/5384543/pexels-photo-5384543.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
        id: 10,
        fullname: "Funmi Adebayo",
        phone: "07055667788",
        email: "funmiadebayo@gmail.com",
        gender: "female",
        dob: "February 18th, 1994",
        country: "Nigerian",
        state: "Oyo, Ibadan",
        address: "Ring Road, Ibadan, Nigeria",
        image: "https://images.pexels.com/photos/8926712/pexels-photo-8926712.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
        id: 11,
        fullname: "Chukwuma Okeke",
        phone: "09066778899",
        email: "chukwumaokeke@gmail.com",
        gender: "male",
        dob: "May 9th, 1986",
        country: "Nigerian",
        state: "Delta, Warri",
        address: "Effurun-Sapele Road, Warri, Nigeria",
        image: "https://images.pexels.com/photos/5327944/pexels-photo-5327944.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
        id: 12,
        fullname: "Kemi Ogundipe",
        phone: "08177889900",
        email: "kemiogundipe@gmail.com",
        gender: "female",
        dob: "September 22nd, 1992",
        country: "Nigerian",
        state: "Ekiti, Ado-Ekiti",
        address: "Fajuyi Road, Ado-Ekiti, Nigeria",
        image: "https://images.pexels.com/photos/8926707/pexels-photo-8926707.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
        id: 13,
        fullname: "Tunde Adeyemi",
        phone: "07088990011",
        email: "tundeadeyemi@gmail.com",
        gender: "male",
        dob: "March 14th, 1988",
        country: "Nigerian",
        state: "Kwara, Ilorin",
        address: "University Road, Ilorin, Nigeria",
        image: "https://images.pexels.com/photos/5490964/pexels-photo-5490964.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
        id: 14,
        fullname: "Ngozi Okonkwo",
        phone: "09099001122",
        email: "ngoziokonkwo@gmail.com",
        gender: "female",
        dob: "July 7th, 1990",
        country: "Nigerian",
        state: "Abia, Umuahia",
        address: "Government House Road, Umuahia, Nigeria",
        image: "https://images.pexels.com/photos/8926566/pexels-photo-8926566.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
        id: 15,
        fullname: "Biodun Olatunji",
        phone: "08100112233",
        email: "biodunolatunji@gmail.com",
        gender: "male",
        dob: "October 1st, 1984",
        country: "Nigerian",
        state: "Ondo, Akure",
        address: "FUTA South Gate, Akure, Nigeria",
        image: "https://images.pexels.com/photos/5327925/pexels-photo-5327925.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
        id: 16,
        fullname: "Chioma Nnamdi",
        phone: "08100112234",
        email: "chiomaannamdi@gmail.com",
        gender: "female",
        dob: "October 1st, 2001",
        country: "Nigerian",
        state: "Plateau, Jos",
        address: "Rayfield Resort, Jos, Nigeria",
        image: "https://images.pexels.com/photos/8926725/pexels-photo-8926725.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
];

export const populatePopularMatch = async () => {
    try {
        const db = await openDB("MateSpaceDB", 3);
        const tx = db.transaction("profile", "readwrite");
        const store = tx.objectStore("profile");

        // Use Promise.all for better performance
        await Promise.all(
            posibleMatch.map(match => store.put(match))
        );

        await tx.done;
        console.log("Successfully populated popular matches");
    } catch (error) {
        console.error("Error populating popular matches:", error);
    }
};