import Landmark from "./landmark.ts";
import database from "./Database.ts";

interface Neighbor {
    name: string;
    distance: number;
}

interface Landmark {
    name: string;
    latitude: number;
    longitude: number;
    neighbours: Neighbor[];
}


database.once('open', async () => {
    try {
        await Landmark.deleteMany();  // Clear previous data

        const landmarks = [
            {
                name: "Unilag Gate",
                latitude: 6.5771,   
                longitude: 3.38423, 
                neighbours: [
                    { name: "Environmental science", distance: 35 },
                    { name: "Education", distance: 20 },
                    {name: "Wema Bank",  distance: 15 }
                ]
            },
            {
                name: "Jelili Hall",
                latitude: 6.51666,
                longitude: 3.38722,
                neighbours: [
                    { name: "Sport Center", distance: 3 },
                    { name: "Environmental science", distance: 20 },
                    { name: "Wema Bank",  distance: 40 }
                ]
            },
            {
                name: "Education",
                latitude: 6.51678,
                longitude: 3.38559,
                neighbours: [
                    { name: "Unilag Gate", distance: 35 },
                    { name: "Wema Bank", distance: 27 },
                    {name: "Kofoworola Hostel", distance: 40}
                ]
            },
            {
                name: "Environmental science",
                latitude: 6.51821,
                longitude: 3.38722,
                neighbours: [
                    { name: "St. Thomas", distance: 24 },
                    { name: "Unilag Gate", distance: 35 },
                    { name: "Jelili Hall", distance: 20 }
                ]
            },
            {
                name: "Wema Bank",
                latitude: 6.51723,
                longitude: 3.38679,
                neighbours: [
                    { name: "Unilag Gate", distance: 15 },
                    { name: "Education", distance: 27 },
                    { name: "Jelili Hall", distance: 27 }
                ]
            },
            {
                name: "St. Thomas",
                latitude: 6.51867,
                longitude: 3.38922,
                neighbours: [
                    { name: "Environment Science", distance: 24 },
                    { name: "Chapel of Christ", distance: 5.9 }
                ]
            },
            {
                name: "Chapel of Christ",
                latitude: 6.51825,
                longitude: 3.38961,
                neighbours: [
                    { name: "Central Mosque", distance: 11 },
                    { name: "Sport Center", distance: 70 }
                ]
            },
            {
                name: "Central Mosque",
                latitude: 6.51929,
                longitude: 3.39014,
                neighbours: [
                    { name: "Chapel of Christ", distance: 11 },
                    { name: "New Hall", distance: 29 }
                ]
            },
            {
                name: "Sport Center",
                latitude: 6.51679,
                longitude: 3.38666,
                neighbours: [
                    { name: "Chapel of Christ", distance: 70 },
                    { name: "Jelili Hall", distance: 3 },
                    { name: "Amphiteather", distance: 30 }
                ]
            },
            {
                name: "Amphiteather",
                latitude: 6.51784,
                longitude: 3.39001,
                neighbours: [
                    {name: "Sport Center", distance: 30},
                    {name: "Nord", distance: 13}
                ]
            },
            {
                name: "Nord",
                latitude: 6.51924,
                longitude: 3.39028,
                neighbours: [
                    {name: "Amphiteather", distance: 13},
                    {name: "Access Bank", distance: 19}
                ]
            },
            {
                name: "Access Bank",
                latitude:6.51880,
                longitude: 3.39184,
                neighbours: [
                    {name: "Nord", distance: 19},
                    {name: "Nithub",  distance: 35},
                    {name: "New Hall",  distance: 4.2},
                    {name: "CITS", distance: 40}
                ]
            },
            {
                name: "New Hall",
                latitude: 6.51907,
                longitude: 3.39230,
                neighbours: [
                    {name: "Central Mosque",  distance: 29},
                    {name: "Access Bank", distance: 4.2},
                    {name: "Fire Station", distance: 45}

                ]
            },
            {
                name: "Nithub",
                latitude:  6.51648,
                longitude:  3.39138,
                neighbours:[
                    {name: "Access Bank", distance: 35},
                    {name: "Faculty of Social Science", distance: 6.5 }
                ]
            },
            {
                name: "Faculty of Social Science",
                latitude: 6.51589,
                longitude: 3.39149,
                neighbours: [
                    {name:  "Nithub", distance: 6.5 },
                    {name: "DLI ", distance: 50},
                    {name: "International school of Lagos", distance: 60 }
                ]
            },
            {
                name: "Kofo Hall",
                latitude: 6.51491,
                longitude: 3.38579,
                neighbours: [
                    {name: "Education", distance: 40},
                    {name: "Biobaku Hall", distance: 26}
                ]
            },
            {
                name: "Biobaku Hall",
                latitude: 6.51510,
                longitude: 3.38720,
                neighbours: [
                    {name: "Kofo Hall",  distance: 26 },
                    {name: "International school of Lagos", distance:90}
                ]
            },
            {
                name: "International school of Lagos",
                latitude: 6.51132,
                longitude: 3.38947,
                neighbours: [
                    {name: "Faculty of Social Science", distance: 60 },
                    {name: "Biobaku Hall", distance: 90 },
                    {name: "DLI", distance: 25 },
                    {name: "Unilag Second Gate", distance: 60}
                ]
            },
            {
                name: "DLI",
                latitude: 6.51323,
                longitude: 3.39106,
                neighbours: [
                    {name: "Unilag Medical Center", distance: 85 },
                    {name: "International school of Lagos",  distance: 20 },
                    {name: "Faculty of Social Science",  distance: 50 }
                ]
            },
            {
                name: "Unilag Second Gate",
                latitude: 6.51109,
                longitude: 3.38834,
                neighbours: [
                    {name: "International school of Lagos", distance: 60 },
                ]
            },
            {
                name: "CITS",
                latitude: 6.51832,
                longitude: 3.39549,
                neighbours: [
                    {name: "Access Bank", distance: 40 },
                    {name: "Fire Station", distance: 14 },
                ]
            },
            {
                name: "Fire Station",
                latitude: 6.51857,
                longitude: 3.39623,
                neighbours: [
                    {name: "CITS", distance: 14 },
                    {name: "Faculty of Arts", distance: 23}
                ]
            },
            {
                name: "Faculty of Arts",
                latitude: 6.51963,
                longitude: 3.39835,
                neighbours: [
                    {name: "Fire Station", distance: 23},
                    {name: "Sofoluwe Park", distance:4.9 },
                    {name: "Faculty of Law", distance:23 },
                    {name: "Unilag Senate Building", distance: 15 },
                ]
            },
            {
                name: "Sofoluwe Park",
                latitude: 6.51899,
                longitude: 3.39861,
                neighbours: [
                    {name: "Faculty of  Arts", distance: 4.9 },
                    {name: " Faculty of Engineering ", distance: 14 },
                    {name: "Unilag Senate Building", distance: 10 },

                ]
            },
            {
                name: "Faculty of Law",
                latitude: 6.52044,
                longitude: 3.39908,
                neighbours: [
                    {name: "Faculty of Arts", distance: 23 },
                    {name: "Unilag Senate Building", distance: 7.5 },
                    {name: "Unilag Library", distance: 5.1}
                ]
            },
            {
                name: "Unilag Library",
                latitude: 6.52006,
                longitude: 3.39986,
                neighbours: [
                    {name: "Faculty  of Law", distance: 5.1 },
                    {name:  "Unilag Senate Building", distance: 9.8 },
                    {name: "Lagoon Front", distance: 5}
                ]
            },
            {
                name: "Lagoon Front",
                latitude: 6.52158,
                longitude: 3.40019,
                neighbours: [
                    {name: "Unilag Library", distance: 5 },
                    {name:  "Faculty of Engineering", distance: 35 },
                ]
            },
            {
                name:  "Faculty of Engineering",
                latitude: 6.51816,
                longitude: 3.39946,
                neighbours: [
                    {name: "Lagoon Front", distance: 35},
                    {name: "Unilag Senate Building", distance: 11},
                    {name: "Sofoluwe Park", distance: 14},
                    {name: "Faculty of Science", distance: 45}
                ]
            },
            {
                name: "Unilag Senate Building",
                latitude: 6.51946,
                longitude: 3.39871,
                neighbours: [
                    {name: "Sofoluwe  Park", distance: 10 },
                    {name: "Faculty of Engineering", distance: 11 },
                    {name: "Faculty of Arts", distance: 15 },
                    {name: "Faculty of Law", distance: 7.5 },
                    {name: "Unilag Library", distance: 9.8 },
                ]
            },
            {
                name: "Faculty of Science",
                latitude: 6.51518,
                longitude: 3.39945,
                neighbours: [
                    {name: "Faculty of Engineering", distance: 45},
                    {name: "King Jaja Hall", distance: 40},
                    {name: "Dept. of Chemical Engineering", distance: 16}
                ]
            },
            {
                name: "King Jaja Hall",
                latitude: 6.51616,
                longitude: 3.39783,
                neighbours: [
                    {name: "Faculty of Science", distance: 40 },
                    {name: "Dept. of Chemical Engineering", distance: 28 },
                    {name: "Staff school hall", distance: 23 }
                ]
            },
            {
                name: "Staff school hall",
                latitude: 6.51531,
                longitude: 3.39736,
                neighbours: [
                    {name: "King Jaja Hall", distance: 23 },
                    {name: "Women Society School", distance: 15 }
                ] 
            },
            {
                name: "Dept. of Chemical Engineering",
                latitude: 6.51502,
                longitude: 3.39818,
                neighbours: [
                    {name: "King Jaja Hall", distance: 28 },
                    {name: "Women Society School", distance: 10 },
                    {name: "Faculty of Science", distance: 16 }
                ] 
            },
            {
                name: "Women Society School",
                latitude: 6.51441,
                longitude: 3.39747,
                neighbours: [
                    {name: "Staff school hall", distance: 15 },
                    {name: "Dept. of Chemical Engineering", distance: 10 },
                    {name: "Unilag Medical Center", distance: 5}
                ]
            },
            {
                name: "Unilag Medical Center",
                latitude: 6.51407,
                longitude: 3.39724,
                neighbours: [
                    {name: "Women Society School", distance: 5 },
                    {name: "DLI", distance: 85 }
                ]    
            }
        ];

        // Create a map for quick access by name
        const landmarksMap = new Map();
        landmarks.forEach(landmark => landmarksMap.set(landmark.name, landmark));

        // Insert updated landmarks with adjusted positions into the database
        await Landmark.insertMany(Array.from(landmarksMap.values()));  
        console.log("Landmark data with adjusted positions inserted successfully");

    } catch (err) {
        console.error("Error inserting landmark data:", err);
    } finally {
        process.exit();  // Ensure the process exits only after all operations
    }
});
