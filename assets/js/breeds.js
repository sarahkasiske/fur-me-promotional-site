
// Dog Breeds
var dogBreeds = {
  akita: {
    breed: "Akita",
    description: "The Akita is a large Spitz dog known for being protective and devoted to its family. Because of the Akita's protective nature it can show aggression towards other dogs and become suspicious of strangers. While a bit stubborn and independent, they are typically obedient towards their master and can be trained to behave around other dogs and strangers. Akitas require lots of exercise and prefer a home with a fenced backyard they can play in.",
    characteristics: "Brave, energetic, loyal, strong, devoted, affectionate",
    type: "Working",
    size: "Large",
    rarity: false,
    hypoallergenic: false,
    friendliness: "The Akita is friendly and devoted to its family. However, unless properly trained and socialized it can show aggression towards other dogs and be uncomfortable with strangers.",
    friendliness_with_family: 5,
    good_with_children: 3,
    friendliness_with_strangers: 2,
    friendliness_with_dogs: 2,
    lifestyle: "Akitas are energetic and like lots of mental and physical exercise. If you are looking for a couch potato who will be happy in an apartment this dog may not be for you.",
    energy: 3,
    apartment_adaptability: 2,
    independence: 4,
    grooming: 2,
    trainability: "Akitas are an independent and domineering breed. While trainable, this dog would be a challenge for a first time dog owner.",
    intelligence: 3,
    noisiness: 4,
    prey_drive: 3,
    wanderlust: 4,
    common_health_issues: "Hip dysplasia, progressive retinal atrophy acquired myasthenia gravis, gastric dilatation volvulus",
    weight: "70-130 lbs",
    height: "24-28 in",
    coat_length: "Short",
    lifespan: "10-12 years"
  },
  australianShepherd: {
    breed: "Australian Shepherd",
    description: "Australian Shepherds are a herding breed that love to work. They have a great deal of strength and energy and are extremely intelligent. Australian Shepherds are loving and devoted to their families. With enough exercise and mental activities can be an excellent family dog.",
    characteristics: "Lively, vivacious, energetic, intelligent, eager, independent, devoted, playful",
    type: "Herding",
    size: "Medium",
    rarity: false,
    hypoallergenic: false,
    friendliness: "Australian Shepherds are very friendly with their family. They are also friendly with other dogs. While good with children, if they do not have animals to herd, they may try to herd young children with nipping. Australian Shepherds are protective of their family and can be reserved with strangers.",
    friendliness_with_family: 5,
    good_with_children: 3,
    friendliness_with_strangers: 2,
    friendliness_with_dogs: 4,
    lifestyle: "Australian Shepherds need space to run and play. They are happiest with a fenced yard and an active family. Without exercise and mental activities these dogs can become bored and destructive.",
    energy: 5,
    apartment_adaptability: 2,
    independence: 2,
    grooming: 3,
    trainability: "Australian Shepherds are extremely intelligent and eager to please making them great dogs to train. They learn quickly and are very responsive to training.",
    intelligence: 5,
    noisiness: 2,
    prey_drive: 4,
    wanderlust: 4,
    common_health_issues: "Collie eye anomaly, cataracts, epilepsy, underactive thyroid glands",
    weight: "40-65 lbs",
    height: "18-23 in",
    coat_length: "Medium",
    lifespan: "12-15 Years"
  },
  bassetHound: {
    breed: "Basset Hound",
    description: "Description: Basset Hounds are friendly, loud, lovable dogs that are good with children and are relatively low-maintenance. Basset Hounds were originally bred to hunt small game and have excellent scenting skills. Despite their short legs they can move quickly so spending extra time on training or keeping them on a leash is essential.",
    characteristics:"Easygoing, friendly, gentle, calm, investigative, patient, stubborn",
    type: "Hound",
    size: "Medium",
    rarity: false,
    hypoallergenic: false,
    friendliness: "Basset hounds are very friendly and get along with just about everyone. They are a good natured, easy going breed.",
    friendliness_with_family: 5,
    good_with_children: 5,
    friendliness_with_strangers: 5,
    friendliness_with_dogs: 5,
    lifestyle: "If you are looking for a dog who loves fetch, this breed may not be for you. Basset Hounds, while extremely friendly, are not the most playful dogs. However, because they are a pretty low-key dog they are very adaptable and can be happy in apartments as long as you don’t mind dealing with barking. Bred as a scent hound they are very investigative and have a strong prey drive. Being a hound, they are also likely to bark or howl often.",
    energy: 2,
    apartment_adaptability: 3,
    independence: 3,
    grooming: 1,
    trainability: "Training a Basset hound is not easy. First time owners might have trouble training this breed. Basset Hounds can be stubborn so patience and perseverance are essential.",
    intelligence: 3,
    noisiness: 5,
    prey_drive: 5,
    wanderlust: 4,
    common_health_issues: "Obesity, intervertebral disk disease, ectropion, osteochondrosis dissecans, gastric torsion, elbow dysplasia, thrombopathy, entropion, otitis externa, glaucoma, hip dysplasia",
    weight: "50-65 lbs",
    height: "11-15 in",
    coat_length: "Short",
    lifespan: "10-12 Years"
  },
  beagle: {
    breed: "Beagle",
    description: "Description: Beagles are an active breed, bred to hunt small game. They are extremely friendly, playful and affectionate and can be great family pets. Because of their strong instincts they can be difficult to train and are not very trustworthy off a leash. They are also a very vocal and have a tendency to bark or howl often.",
    characteristics: "Loud, friendly, playful, determined, lively, active ",
    type: "Hound",
    size: "Medium",
    rarity: false,
    hypoallergenic: false,
    friendliness: "Beagles are very friendly. They are a great family dog and get along well with pretty much everyone. If you have other dogs the Beagle is a good option. They are typically friendly towards other dogs.",
    friendliness_with_family: 5,
    good_with_children: 5,
    friendliness_with_strangers: 4,
    friendliness_with_dogs: 5,
    lifestyle: "Beagles are energetic, playful and enjoy a good run. They were bred to hunt and can take off if they catch the scent of an animal. Once they are following a trail they can be reluctant to stop. If you have a fenced in yard, make sure it is secure before trusting your dog outside alone. Wiith exercise Beagles can adapt to apartment living, your neighbors might not be thrilled. These dogs are not quiet, they bark frequently and are one of the loudest dog breeds.",
    energy: 4,
    apartment_adaptability: 2,
    independence: 3,
    grooming: 1,
    trainability: "Beagles have strong instincts that can be difficult to override. With determination and patience, they can be trained. However, they tend to have selective hearing, and there is no guarantee they won't ignore their training if they catch the trail of an animal.",
    intelligence: 4,
    noisiness: 5,
    prey_drive: 5,
    wanderlust: 5,
    common_health_issues: "Obesity, epilepsy, hip dysplasia, thyroid disorders",
    weight: "18-30 lbs",
    height: "13-15 in",
    coat_length: "Short",
    lifespan: "10-15 Years"
  },
  berneseMountainDog: {
    breed: "Bernese Mountain Dog",
    description: "Description: The Bernese Mountain Dog originated in Switzerland where it was bred as an all purpose farm dog. These large dogs tend to have relaxed and calm personalities lending them to be a popular family dog. Bernese Mountain dogs enjoy company and like to spend as much time with their family as possible.",
    characteristics: "Friendly,calm, gentle, active, kind",
    type: "Working",
    size: "Large",
    rarity: false,
    hypoallergenic: false,
    friendliness: "These dogs tend to be mild-tempered. They are affectionate and eager to please making them a popular family dog that is reliable with children.",
    friendliness_with_family: 4,
    good_with_children: 4,
    friendliness_with_strangers: 4,
    friendliness_with_dogs: 4,
    lifestyle:"Bernese Mountain Dogs enjoy spending time outside, especially when it is not too hot. They need moderate exercise everyday, a good walk or hike will keep them happy.",
    energy: 3,
    apartment_adaptability: 3,
    independence: 2,
    grooming: 3,
    trainability: "These dogs can be a bit stubborn and slow to learn. It is important to have patience and try not to get frustrated with them. With time, Bernese Mountain Dogs can be taught to consistently follow commands.",
    intelligence: 4,
    noisiness: 3,
    prey_drive: 3,
    wanderlust: 3,
    common_health_issues: "Hip and elbow dysplasia, progressive retinal atrophy, cataracts, von willebrand disease, cancer",
    weight: "71-120 lbs",
    height: "23-28 in",
    coat_length: "Medium",
    lifespan: "6-9 Years"
  },
  bichonFrise: {
    breed: "Bichon Frise",
    description: "A descendant of the French Water Dog and the Poodle the Bichon Frise is a small, lively dog that loves attention. If you like being alone this dog might not be a good match. They are an attentive breed and become very attached to their families.",
    characteristics: "playful, curious, lively, attentive",
    type: "Non Sporting",
    size: "Small",
    rarity: false,
    hypoallergenic: true,
    friendliness: "The Bichon Frise is friendly and attentive toward its family.These dogs become very attached and do not like to be left alone for long periods. While they are attached to their families they are not overprotective and are friendly with other people and dogs.",
    friendliness_with_family: 5,
    good_with_children: 4,
    friendliness_with_strangers: 5,
    friendliness_with_dogs: 4,
    lifestyle: "Bichon Frises while lively, do not need too much exercise and are content with a daily walk around the park. With their friendly demeanor and small size these dogs can adapt well to apartment living.",
    energy: 3,
    apartment_adaptability: 5,
    independence: 1,
    grooming: 4,
    trainability: "Bichon Frises are intelligent and highly trainable. They are typically most responsive to positive reinforcement when being trained.",
    intelligence: 4,
    noisiness: 3,
    prey_drive: 4,
    wanderlust: 2,
    common_health_issues: "Anemia and thrombocytopenia",
    weight: "11-15 lbs",
    height: "9-11 in",
    coat_length: "Medium",
    lifespan: "12-15 Years"
  },
  bloodhound: {
    breed: "Bloodhound",
    description: "While Bloodhounds were originally bred for their superior tracking skills they have also become known for their friendly disposition. While they are not the cleanest dogs, if you don’t mind drooling and a musty odor Bloodhounds can be a great family dog. They are are a very loving breed and are great with children.",
    characteristics: "Active, smart, friendly, investigative, affectionate",
    type: "Sent Hound",
    size: "Large",
    rarity: false,
    hypoallergenic: false,
    friendliness: "Bloodhounds are very friendly, lovable dogs. They get along with pretty much everyone, other dogs and people alike.",
    friendliness_with_family: 5,
    good_with_children: 5,
    friendliness_with_strangers: 5,
    friendliness_with_dogs: 5,
    lifestyle: "These active dogs like to spend time running and investigating outside, and would be happiest with a fenced in yard. If you are looking for a dog suitable for an apartment this would not be the best choice.",
    energy: 4,
    apartment_adaptability: 1,
    independence: 2,
    grooming: 3,
    trainability: "Bloodhounds are very intelligent but can be a bit stubborn and manipulative. It is important to be confident and consistent while training.",
    intelligence: 4,
    noisiness: 5,
    prey_drive: 5,
    wanderlust: 5,
    common_health_issues: "Bloat",
    weight: "80-110 lbs",
    height: "23-27 in",
    coat_length: "Short",
    lifespan: "10-12 Years"
  },
  borderCollie: {
    breed: "Border Collie",
    description: "Border Collies are a working dog, known for their skill in herding sheep. This breed is highly active and likes to work. With enough socialization this breed can be a good pet and can get along with children and other dogs.",
    characteristics: "Energetic, smart, active, protective ",
    type: "Herding",
    size: "Medium",
    rarity: false,
    hypoallergenic: false,
    friendliness: "These dogs are very friendly and affectionate with their family. With enough exercise they can be good for families with children. Without work to do, Border Collies can sometimes attempt to herd small children. Because of their protective nature Border Collies can be suspicious of strangers and other dogs.",
    friendliness_with_family: 5,
    good_with_children: 4,
    friendliness_with_strangers: 3,
    friendliness_with_dogs: 3,
    lifestyle: "Border Collies have seemingly endless energy and a low tolerance for boredom. To keep these dogs happy they need plenty of exercise and mental activities. Border Collies will feel most at home in a house with a large backyard.",
    energy: 5,
    apartment_adaptability: 2,
    independence: 2,
    grooming: 2,
    trainability: "If you are consistent and begin training at a young age Border Collies can be highly trainable. It is also important when training to socialize a Border Collie with strangers and other dogs so they are less likely to be suspicious of new people and dogs.",
    intelligence: 5,
    noisiness: 3,
    prey_drive: 1,
    wanderlust: 1,
    common_health_issues: "Collie eye anomaly, hip dysplasia, epilepsy",
    weight: "25-44 lbs",
    height: "20-21 in",
    coat_length: "Long",
    lifespan: "10-17 Years"
  },
  bostonTerrier: {
    breed: "Boston Terrier",
    description: "Although Boston Terriers may once have been bred as pit fighters, they have become a lively, affectionate breed of dog. While they are typically quiet, gentle dogs, they can also be a bit stubborn and have small bouts of hyperactivity. They are praised as extremely loveable companions.",
    characteristics: "Intelligent, lively, affectionate",
    type: "Non Sporting",
    size: "Small",
    rarity: false,
    hypoallergenic: false,
    friendliness: "Boston terriers are naturally affectionate which makes them a great family pet. They are great with children and a popular companion for older people because of their gentle nature.",
    friendliness_with_family: 4,
    good_with_children: 5,
    friendliness_with_strangers: 4,
    friendliness_with_dogs: 5,
    lifestyle: "Boston Terriers are lively dogs, but don’t require large amounts of outdoor exercise. They need to live indoors and are a good choice if you live in an apartment. They enjoy going for a walk but don’t need a yard to play in. Boston Terriers should be socialized from an early age to different people, sounds and experiences.",
    energy: 4,
    apartment_adaptability: 5,
    independence: 3,
    grooming: 1,
    trainability: "Boston Terriers are intelligent but sensitive to the tone of your voice. Using positive reinforcement will provide the best results. Persistence and consistency are also key to training your dog.",
    intelligence: 4,
    noisiness: 3,
    prey_drive: 2,
    wanderlust: 5,
    common_health_issues: "Brachycephalic syndrome, patellar luxation, cataracts, corneal ulcers",
    weight: "11-24 lbs",
    height: "15-17 in",
    coat_length: "Short",
    lifespan: "13-15 Years"
  },
  boxer: {
    breed: "Boxer",
    description: "Descends from the old fighting dog of the high valleys of Tibet, Boxers have been developed as guard, working and companion dogs. They are active, bright fun-loving, loyal and highly intelligent. They are loving and protective and have become a popular choice for families.",
    characteristics: "Loving, protective, energetic",
    type: "Working",
    size: "Medium",
    rarity: false,
    hypoallergenic: false,
    friendliness: "Boxers have great loyalty to their family. They are loving and protective, but not aggressive to strangers unless they feel their family is threatened.",
    friendliness_with_family: 5,
    good_with_children: 3,
    friendliness_with_strangers: 3,
    friendliness_with_dogs: 2,
    lifestyle: "Boxers have a playful nature and continue puppish antics for several years.  Boxers aren’t considered fully mature until they are 3 years old. They need to be physically and mentally stimulated. Boxers should live indoors as they do not handle extreme heat and cold well.",
    energy: 5,
    apartment_adaptability: 4,
    independence: 1,
    grooming: 1,
    trainability: "Boxers are very intelligent and trainable as well as excellent problem solvers.  They do, however, get bored with repeated commands and tend to have a mind of their own. Early, consistent training is important.",
    intelligence: 4,
    noisiness: 3,
    prey_drive: 3,
    wanderlust: 3,
    common_health_issues: "Cardiomyopathy, hypothyroidism",
    weight: "55-71 lbs",
    height: "21-25 in",
    coat_length: "Short",
    lifespan: "10-12 Years"
  },
  brittany: {
    breed: "Brittany",
    description: "Brittanys are hunting dogs but can be an excellent choice for a family with an active lifestyle. They are family oriented and love being a participant in athletic activities from running and hiking to playing fetch.",
    characteristics: "Active, agile and easily trainable",
    type: "Sporting",
    size: "Medium",
    rarity: false,
    hypoallergenic: false,
    friendliness: "Brittanys have a happy, friendly nature. They love people and are good with children, but can be exuberant. It is good idea to supervise your Brittany around small children. Brittanys can sometimes be shy, consequently socializing them at an early age is important.",
    friendliness_with_family: 5,
    good_with_children: 5,
    friendliness_with_strangers: 3,
    friendliness_with_dogs: 5,
    lifestyle: "Brittanys are very active dogs and need plenty of exercise daily. The lack of exercise can cause your dog to be hyperactive and expend their energy in destructive ways. This problem can be solved if you enjoy an active outdoor life which includes your dog.",
    energy: 5,
    apartment_adaptability: 1,
    independence: 1,
    grooming: 2,
    trainability: "Brittanys are intelligent and easy to train. They enjoy mental as well as physical exercise and look forward to having work to do. Brittanys respond well to firm but gentle training and positive reinforcement.",
    intelligence: 5,
    noisiness: 3,
    prey_drive: 5,
    wanderlust: 4,
    common_health_issues: "Hip dysplasia, hypothyroidism, cataracts, epilepsy, hemophilia ",
    weight: "31-40 lbs",
    height: "19-20 in",
    coat_length: "Short",
    lifespan: "12-14 Years"
  },
  bulldog: {
    breed: "Bulldog",
    description: "Bulldogs are devoted to their family, love children and are easy to train. Although they were originally bred to work with bulls, they are now gentle companions and affectionate family dogs. Bulldogs do not tolerate warm weather, and must live indoors with access to air conditioning in summer weather. Because of their physical design, too much exercise or stress can make it difficult for them to breathe.",
    characteristics: "Docile, willful, friendly, gregarious",
    type: "Non Sporting",
    size: "Medium",
    rarity: false,
    hypoallergenic: false,
    friendliness: "Bulldogs love people. They are an calm, not aggressive and extremely good natured making them adaptable to many types of living situations. Bulldogs are good with children, however, they prefer to be inactive, not playing fetch or running around with the kids in the yard.",
    friendliness_with_family: 5,
    good_with_children: 5,
    friendliness_with_strangers: 5,
    friendliness_with_dogs: 3,
    lifestyle: "Bulldogs are docile creatures who enjoy laying by your side until their next meal arrives. They may not be enthusiastic about going for a walk, but need exercise to help control their weight. They do not tolerate the heat and are definitely house dogs.",
    energy: 1,
    apartment_adaptability: 5,
    independence: 2,
    grooming: 2,
    trainability: "Bulldogs are gregarious by nature, socialize them early, offering them positive experiences with new people and pets. Bulldogs can be stubborn but can be motivated to learn basic commands. They are food motivated and respond well to positive training methods. Training sessions should be short, 5-10 minutes daily. Care should be taken not to over exert your dog during training.",
    intelligence: 2,
    noisiness: 3,
    prey_drive: 2,
    wanderlust: 1,
    common_health_issues: "Brachycephalic Airway Syndrome, Cherry Eye, Dermatitis, Hip and Elbow Dysplasia, Heat Sensitivity, hypothyroidism, heart disease, cancer",
    weight: "51-55 lbs",
    height: "15-16 in",
    coat_length: "Short",
    lifespan: "8-10 Years"
  },
  bullmastiff: {
    breed: "Bullmastiff",
    description: "Historically, Bullmastiffs served as guardians of the grounds on England’s great estates. They were breed to be courageous, strong and fast. Bullmastiffs today have become loving dogs who are protective of their family.",
    characteristics: "Protective, loving, loyal",
    type: "Working",
    size: "Large",
    rarity: false,
    hypoallergenic: false,
    friendliness: "Bullmastiffs are loving dogs, protective of their family. They are wonderful, caring, and loyal companions. While they are very good with children, they should not be left unattended with small children because of their size.",
    friendliness_with_family: 5,
    good_with_children: 5,
    friendliness_with_strangers: 3,
    friendliness_with_dogs: 4,
    lifestyle: "Bullmastiffs adapt well to most home environments. They are low energy and suitable for apartment living with a daily walk, but due to its size is best suited for a house with a fenced backyard. Bullmastiffs are prone to heatstroke and should be kept indoors during hot or humid weather.",
    energy: 2,
    apartment_adaptability: 3,
    independence: 4,
    grooming: 1,
    trainability: "Training should begin as soon as you bring your puppy home, while your dog is still a manageable size. Socializing your Bullmastiff so it is used to other people and dogs is important as they can be aggressive if they are not taught manners. Bullmastiffs want to please, but may think for itself and needs firm, consistent training without constant repetition.",
    intelligence: 3,
    noisiness: 4,
    prey_drive: 3,
    wanderlust: 3,
    common_health_issues: "Hip and elbow dysplasia, hypothyroidism, entropion, subaortic stenosis, cystinuria, gastric torsion and bloat, heatstroke",
    weight: "90-130 lbs",
    height: "24-27 in",
    coat_length: "Short",
    lifespan: "8-10 Years"
  },
  caneCorso: {
    breed: "Cane Corso",
    description: "The Cane Corso is an Italian breed of dog known to be an excellent companion, guard dog and hunter. This dog is best suited for an experienced owner who has a large securely fenced yard.",
    characteristics: "Trainable, reserved, even tempered, calm, protective, suspicious of strangers and other dogs",
    type: "Working",
    size: "Large",
    rarity: false,
    hypoallergenic: false,
    friendliness: "The ideal Cane Corso is affectionate toward its family, including children, but to get them to that point requires socialization and training from an early age. This dog will not do well in a home with anyone who is scared of large dogs. This is a family-only dog and will not be friendly towards others. It’s family will have the dog's undivided loyalty and protection.",
    friendliness_with_family: 4,
    good_with_children: 2,
    friendliness_with_strangers: 2,
    friendliness_with_dogs: 2,
    lifestyle: "This dog needs a secure area to run the fence, however, it will likely bark at people passing by. This dog will dig large holes and chew up your furniture if it does not have work to do.  Cane Corsos will be happiest if involved in dog sport such as agility, dock diving, nose work, obedience or tracking.",
    energy: 4,
    apartment_adaptability: 1,
    independence: 1,
    grooming: 1,
    trainability: "The Corso is very intelligent and needs plenty of socialization, training and exercise to be a good companion. The Cane Corso has a bossy nature and will dominate the household without  firm leadership and training. This is not a good dog for an inexperienced owner. Training must involve positive reinforcement for good behavior and firm, rapid corrections and consistent enforcement of the rules so your dog knows what is expected and understands who is in charge.",
    intelligence: 5,
    noisiness: 3,
    prey_drive: 5,
    wanderlust: 2,
    common_health_issues: "Hip dysplasia, eyelid abnormalities, demodectic mange, gastric torsion ",
    weight: "88-110 lbs",
    height: "24-27 in",
    coat_length: "Short",
    lifespan: "10-11 Years"
  },
  cavalierKingCharlesSpaniel: {
    breed: "Cavalier King Charles Spaniel",
    description: "This Spaniel has the ability to retain its sporty nature while being very successful as a family dog and therapy dog. They enjoy hiking, running on the beach as well as showing off their ability as hunting dogs, happily chasing small animals. ",
    characteristics: "Affectionate, easy going, friendly, patient",
    type: "Toy",
    size: "Small",
    rarity: false,
    hypoallergenic: false,
    friendliness: "Cavalier Spaniels love their people and are very attached to them.  They are friendly and enjoy meeting anyone who crosses their path.",
    friendliness_with_family: 5,
    good_with_children: 5,
    friendliness_with_strangers: 5,
    friendliness_with_dogs: 5,
    lifestyle: "Cavalier King Charles Spaniels are loveable, affectionate dogs. They crave attention from their family and are not happy when separated. Cavaliers are good with children but should always be supervised. These dogs are small and could be injured by young children. They might bark when someone comes to the door because of their friendly nature, but don’t expect them to be a good watch dog.  Cavaliers are house dogs and will not thrive living outdoors. Because of their instinctive hunting ability, Cavaliers should be kept on a leash or in a fenced yard.",
    energy: 3,
    apartment_adaptability: 5,
    independence: 1,
    grooming: 4,
    trainability: "Cavaliers should be socialized from an early age, experience with different people, pets and experiences is always a plus. The wish to please and will do everything in their power to make you happy. Praise them so they know when they are doing something you like. Yelling at them when they do something wrong will be counterproductive and will cause them to sulk or hide. To housetrain your dog keep them on a frequent and regular schedule with plenty of opportunities to potty outside. With consistency they will become successfully trained.",
    intelligence: 4,
    noisiness: 3,
    prey_drive: 3,
    wanderlust: 2,
    common_health_issues: "Heart problems, patellar luxation, syringomyelia",
    weight: "11-18 lbs",
    height: "12-13 in",
    coat_length: "Medium",
    lifespan: "12-14 Years"
  },
  chesapeakeBayRetriever: {
    breed: "Chesapeake Bay Retriever",
    description: "Chesapeakes are excellent swimmers and were originally bred to hunt and retrieve ducks in the Chesapeake Bay. They naturally thrive on work and are a superb hunting companion. Chesapeakes are versatile and with training to encourage good manners, they can also be good family dogs.",
    characteristics: "Affectionate, bright, protective, family-oriented",
    type: "Sporting",
    size: "Large",
    rarity: false,
    hypoallergenic: false,
    friendliness: "Chesapeakes are friendly, outgoing and obedient with their family, but are often reserved when meeting people for the first time. They do well with children but do not tolerate abuse, usually getting up and leaving a difficult situation. They are excellent watchdogs, but some Chesapeakes can be aggressive toward other dogs",
    friendliness_with_family: 5,
    good_with_children: 3,
    friendliness_with_strangers: 1,
    friendliness_with_dogs: 1,
    lifestyle: "Chesapeakes are big, bold and active. They love to swim and this activity combined with long walks will alleviate some of their activity needs and help insure a quiet companion at home. Chessies like a cool climate but tolerate warm weather if they are able to swim. They are happiest in the country or suburbs rather than a city.",
    energy: 5,
    apartment_adaptability: 1,
    independence: 4,
    grooming: 1,
    trainability: "Chesapeakes need early socialization. Even with socialization expect them to be reserved around new people and highly protective of its people and property. They should be trained by someone they know, as they will look for their leadership when interacting with other people and dogs. A Chesapeake will learn best with firm consistent training and positive reinforcement combined with fun training exercises. They get easily bored and will not respond well to repetition.",
    intelligence: 4,
    noisiness: 3,
    prey_drive: 3,
    wanderlust: 4,
    common_health_issues: "Hip dysplasia, progressive retinal atrophy, von willebrand’s disease, bloat, epilepsy, chondrodysplasia",
    weight: "55-79 lbs",
    height: "21-26 in",
    coat_length: "Medium",
    lifespan: "12-13 Years"
  },
  chihuahua: {
    breed: "Chihuahua",
    description: "The Chihuahua is a small dog with a large personality. They can compete in dog sports and is an excellent watchdog. Chihuahuas become very attached to their family and are happiest when they are with their people.",
    characteristics: "Lively, vocal, assertive, dominant, enjoys attention",
    type: "Toy",
    size: "Small",
    rarity: false,
    hypoallergenic: false,
    friendliness: "Chihuahuas love and are devoted to their people. They may form a close bond with a single person. Chihuahuas can be unfriendly toward other dogs, but socializing them when they are young will help with this. Chihuahuas get along with children but remember this is a very small dog. Children can inadvertently play rough. Some Chihuahuas have a soft spot, or molera on their skulls, this in addition to their small size makes them vulnerable to injury. Chihuahuas may not the best dog choice if you have small children.",
    friendliness_with_family: 5,
    good_with_children: 4,
    friendliness_with_strangers: 2,
    friendliness_with_dogs: 2,
    lifestyle: "Chihuahuas are indoor dogs, but they love being outdoors and are curious explorers. They have a tendency to forget their size and stand up to larger dogs, thus supervising a Chihuahua while outdoors is important as they can easily escape through small gaps in fences.  They are a great go-everywhere companion.",
    energy: 3,
    apartment_adaptability: 5,
    independence: 1,
    grooming: 1,
    trainability: "Chihuahuas are fast learners. They can compete in agility and obedience trials with as much enthusiasm and success as larger dogs. They do have a tendency to be willful dogs and expecting them to do what you ask can sometimes be a challenge. Chihuahuas should be socialized early as they can be distrustful of strangers and other dogs. This quality, however, makes them a good watch dog. Chihuahuas can become demanding if overindulged.",
    intelligence: 4,
    noisiness: 3,
    prey_drive: 3,
    wanderlust: 2,
    common_health_issues: "Hydrocephalus",
    weight: "5-7 lbs",
    height: "6-9 in",
    coat_length: "Short",
    lifespan: "12-18 Years"
  },
  cockerSpaniel: {
    breed: "Cocker Spaniel",
    description: "While Cocker Spaniels are outstanding family dogs, they were originally known for their expertise as bird dogs.  Their sweet disposition and desire to please has made them popular with children, other pets and the elderly.  Unfortunately, the Cocker Spaniels popularity led to over breeding resulting in serious health and temperament problems, making it especially important to research and find a dedicated breeder.",
    characteristics: "Friendly, lively, affectionate, active, enthusiastic",
    type: "Sporting",
    size: "Medium",
    rarity: false,
    hypoallergenic: false,
    friendliness: "A well-breed Cocker Spaniel is a devoted family pet, loving and gentle, wanting nothing more than to be part of a happy family. Due to their popularity and over breeding,  there have been issues with temperament. It is important to socialize puppies early as they can become sensitive to strange people and dogs. This can make them nervous and your dog may pee because they are excited.",
    friendliness_with_family: 5,
    good_with_children: 3,
    friendliness_with_strangers: 3,
    friendliness_with_dogs: 4,
    lifestyle: "Cocker Spaniels were bred to be hunting dogs so they may chase birds or small animals. If a fenced yard is not available it is best to keep your dog on a leash.  Cocker Spaniels are primarily companion dogs, but they can be trained for show ring, obedience and agility competitions, field work and are also excellent therapy dogs. Cocker Spaniels are happy in most environments.  In an apartment a brisk walk each day will keep them happy and exercised.",
    energy: 4,
    apartment_adaptability: 5,
    independence: 1,
    grooming: 5,
    trainability: "Cocker Spaniels have a “soft” personality. To get the best training results gentle, consistent techniques are suggested. Dogs can become fearful with harsh commands. A command for “quiet” should be part of the training routine as Cockers can become barkers. Early socialization as well as careful and kind training will bring out the best in your dog.",
    intelligence: 4,
    noisiness: 3,
    prey_drive: 5,
    wanderlust: 4,
    common_health_issues: "Eye disorders, disc disease, hypothyroidism, ear infection",
    weight: "15-31 lbs",
    height: "13-15 in",
    coat_length: "Long",
    lifespan: "12-15 Years"
  },
  collie: {
    breed: "Collie",
    description: "Collies love children and bond closely with all family members. They are protective of everyone in their family. As a herding dog, Collies may nip at your children’s heels or your neighbor's’ chickens in an attempt to herd them, while this might seem a bit frightening Collies are very gentle dogs.",
    characteristics: "Devoted, gentle, affectionate, eager to please",
    type: "Herding",
    size: "Medium",
    rarity: false,
    hypoallergenic: false,
    friendliness: "Collies are excellent family companions. They love playing with children and think everyone is their friend. They get along with other pets and may have herding tendencies with neighborhood cats and dogs as well as children. Collies thrive when they spend time with people.",
    friendliness_with_family: 5,
    good_with_children: 5,
    friendliness_with_strangers: 4,
    friendliness_with_dogs: 4,
    lifestyle: "Collies need exercise, this can involve running in a fenced yard or going for a brisk 45 minute walk. After daily exercise, Collies are a calm house dog. Apartments are not ideal for Collies unless there is somewhere to exercise. Collies need people, left alone for long periods Collies will become bored and spend their time barking.",
    energy: 3,
    apartment_adaptability: 2,
    independence: 2,
    grooming: 2,
    trainability: "Collies do well at canine sports such as herding trials, agility, obedience and lure courses. They are intelligent and generally easy to train if handled properly. Collies are sensitive and become depressed if spoken to harshly, negating the purpose of the training.",
    intelligence: 4,
    noisiness: 4,
    prey_drive: 4,
    wanderlust: 1,
    common_health_issues: "Progressive retinal atrophy, collie eye anomaly",
    weight: "51-75 lbs",
    height: "20-24 in",
    coat_length: " Long",
    lifespan: "12-14 Years"
  },
  dachshund: {
    breed: "Dachshund",
    description: "Dachshunds are scent hounds and were bred to hunt badgers and other tunneling animals. While they can be playful family dogs, Dachshunds have a tendency to bond with one family member, becoming jealous and snappy when they are expected to share their owner's attention.",
    characteristics: "Independent, playful, stubborn, mischievous, loyal",
    type: "Hound",
    size: "Small",
    rarity: false,
    hypoallergenic: false,
    friendliness: "Dachshunds are usually a one-person dog. Socialization as a puppy is important because Dachshunds, by nature, are suspicious of strangers. They can be entertaining as well as fearless and enjoy bestowing affection on their person. Dachshunds like to have their own way, but doing this in a playful way makes it seem entertaining.",
    friendliness_with_family: 4,
    good_with_children: 3,
    friendliness_with_strangers: 2,
    friendliness_with_dogs: 3,
    lifestyle: "Dachshunds are very adaptable and can be happy living in an apartment. While they enjoy the occasional trip outside to play they are not overly energetic and can be good companions. It is important to discourage jumping and rough play as Dachshunds have injury-prone backs.",
    energy: 3,
    apartment_adaptability: 5,
    independence: 3,
    grooming: 2,
    trainability: "In order to train a Dachshund it is important to assert pack leadership. If the owner does not establish pack leadership with their Dachshund, training can be difficult. Behavioral issues such as separation anxiety, snapping and overzealous barking can also develop as a result.",
    intelligence: 4,
    noisiness: 5,
    prey_drive: 5,
    wanderlust: 5,
    common_health_issues: "Obesity, intervertebral disk disease, eye problems",
    weight: "9-26 lbs",
    height: "5-9 in",
    coat_length: "Short or Long",
    lifespan: "12-15 Years"
  },
  dobermanPinscher: {
    breed: "Doberman Pinscher",
    description: "Doberman Pinschers were originally bred to be guard dogs and continue to have that characteristic today. They are energetic and intelligent and have been trained for police and military work. They have also become family guardians and companion dogs.",
    characteristics: "Athletic, Powerful, Loyal, Lively, Responsive",
    type: "Working",
    size: "Large",
    rarity: false,
    hypoallergenic: false,
    friendliness: "Although Doberman Pinschers have a reputation as guard dogs, they are also gentle, watchful and loving dogs. A Doberman wants to be close to those it loves and is a natural protector. When a Doberman is treated kindly it can be good with children and friends.",
    friendliness_with_family: 5,
    good_with_children: 3,
    friendliness_with_strangers: 2,
    friendliness_with_dogs: 1,
    lifestyle: "Dobermans are a large dog who need to be active both physically and mentally. They need a lot of exercise and to be kept busy every day. This is not a dog for a laid-back lifestyle. They thrive when included in family activities. Dobermans are sensitive to low temperatures and prefer to be in the house when it is cold.",
    energy: 3,
    apartment_adaptability: 4,
    independence: 3,
    grooming: 1,
    trainability: "Dobermans need a strong leader to train them or they will adopt the alpha role in your household. Early consistent training is critical to establish your role as pack leader. Doberman Pinschers should be socialized at a young age to grow up a well rounded dog.",
    intelligence: 5,
    noisiness: 2,
    prey_drive: 1,
    wanderlust: 2,
    common_health_issues: "Skin ailments, food allergies",
    weight: "66-88 lbs",
    height: "26-27 in",
    coat_length: "Short",
    lifespan: "11-13 Years"
  },
  englishSpringerSpaniel: {
    breed: "English Springer Spaniel",
    description: "English Springer Spaniels are bred to be either hunting dogs or show dogs, but they do not excel at both. They are smart, very active and thrive when given plenty of exercise. Dogs bred for show tend to have a milder temperament.",
    characteristics: "Affectionate, intelligent, active, attentive",
    type: "Sporting",
    size: "Medium",
    rarity: false,
    hypoallergenic: false,
    friendliness: "English Springer Spaniels are enthusiastic, smart and eager to please.  They are happy does and usually do well with children if they are brought up with children. They are affectionate toward their families and generally good with other animals in the household, however, pet birds might be seen as prey. They may bark if strangers enter your house, but they are not guard dogs. They are gentle loving dogs who anticipate attention even from strangers.",
    friendliness_with_family: 5,
    good_with_children: 3,
    friendliness_with_strangers: 4,
    friendliness_with_dogs: 5,
    lifestyle: "Springers need a lot of exercise. A fenced yard will help Springers get the exercise they need. If you walk them in unfenced areas keep them on a leash as their instincts are strong and they may decide to take themselves hunting.  All Springers are good athletes and many non-hunting dogs enjoy obedience, agility, flyball and tracking. They are people oriented and shouldn’t be left at home for long periods of time, they can become nuisance barkers as they are bored and lonely.",
    energy: 5,
    apartment_adaptability: 1,
    independence: 2,
    grooming: 3,
    trainability: "English Springer Spaniels are intelligent dogs. Puppies should be socialized with children and other animals as well as different sights and sounds. They should be socialized to prevent fearfulness or shyness. This will help their tendency toward excitable or submissive urination when they are excited or nervous.",
    intelligence: 5,
    noisiness: 3,
    prey_drive: 5,
    wanderlust: 4,
    common_health_issues: "Elbow and hip dysplasia, otitis media, progressive retinal atrophy and retinal dysplasia",
    weight: "40-51 lbs",
    height: "18-22 in",
    coat_length: "Medium",
    lifespan: "12-14 Years"
  },
  frenchBulldog: {
    breed: "French Bulldog",
    description: "Once known to be good ratters, French Bulldogs have become an excellent companion dog. They love their family, but can be territorial or possessive of their people. Frenchies love to play but also enjoy lounging on the sofa. They are protective of their home and family, only barking for a cause.",
    characteristics: "Friendly, loyal, playful, responsive",
    type: "Non Sporting",
    size: "Small",
    rarity: false,
    hypoallergenic: false,
    friendliness: "French Bulldogs get along with everyone, including children, strangers and other dogs especially if they have been socialized from an early age.",
    friendliness_with_family: 5,
    good_with_children: 4,
    friendliness_with_strangers: 4,
    friendliness_with_dogs: 4,
    lifestyle: "French Bulldogs are a good apartment dog as they do not require much exercise, and a yard is not required. They love attention but can handle a lifestyle with an owner who is away or busy during the day. They are humorous and mischievous and need to live with someone who is consistent, firm and patient.",
    energy: 2,
    apartment_adaptability: 5,
    independence: 4,
    grooming: 1,
    trainability: "French Bulldogs are intelligent but can shows signs of stubbornness and are at times freethinkers. Patience and perseverance are needed when training a French Bulldog. Their love of play and relaxed attitude carry over into their training. They are easier to train if it is viewed as a game and is fun. ",
    intelligence: 3,
    noisiness: 3,
    prey_drive: 2,
    wanderlust: 2,
    common_health_issues: "Brachycephalic syndrome, skin ailments, von willebrand’s disorder, spinal ailments",
    weight: "24-29 lbs",
    height: "11-13 in",
    coat_length: "Short",
    lifespan: "10-12 Years"
  },
  germanShepherd: {
    breed: "German Shepherd",
    description: "German Shepherds are working dogs and incredibly versatile. They are guide dogs for handicapped, and are also trained to do work for the police, military, search and rescue as well as drug detection. In addition German Shepherds are faithful companions.",
    characteristics: "Focused, adaptable, smart, protective, loyal, responsive",
    type: "Herding",
    size: "Large",
    rarity: false,
    hypoallergenic: false,
    friendliness: "German Shepherds are loyal to and protective of their family.  They can be aloof and suspicious which makes them good watchdogs but can make friends feel uncomfortable.  If socialized properly from puppyhood, a German Shepherd can learn to be more accepting of new people and circumstances.",
    friendliness_with_family: 5,
    good_with_children: 5,
    friendliness_with_strangers: 3,
    friendliness_with_dogs: 2,
    lifestyle: "German Shepherds are high energy dogs who need a lot of outdoor activity. When they do not get enough exercise they become bored and frustrated, causing problems like barking and chewing. They have difficulties handling separation anxiety and are not good for owners who will be gone frequently. German Shepherds are happiest living indoors with their family with access to a large, fenced yard.",
    energy: 5,
    apartment_adaptability: 2,
    independence: 2,
    grooming: 1,
    trainability: "This working dog is obviously very intelligent and often trained to carry out particular tasks. For a German Shepherd who is a family companion your puppy must be exposed to many experiences, places and people. Obedience training should begin when they are puppies to teach them basic canine manners. Crate training helps  German Shepherds manage separation anxiety by teaching them to be calm and happy when separated from their owner.",
    intelligence: 5,
    noisiness: 4,
    prey_drive: 4,
    wanderlust: 2,
    common_health_issues: "Hip dysplasia, pancreatic deficiency",
    weight: "49-88 lb",
    height: "23-25 in",
    coat_length: "Short or Long",
    lifespan: "10-13 Years"
  },
  germanShorthairedPointer: {
    breed: "German Shorthaired Pointer",
    description: "German Shorthaired pointers are excellent hunting dogs who also make good family dogs. If you are not a hunter they are a wonderful companion dog for hiking, jogging and other outdoor activities.",
    characteristics: "Energetic, sensitive, obedient, versatile, lively",
    type: "Sporting",
    size: "Medium",
    rarity: false,
    hypoallergenic: false,
    friendliness: "Pointers are energetic dogs who love being with people. They enjoy being part of the family but need a great deal of exercise. Without enough exercise German Shorthaired Pointers can be a bit too lively for small children. Pointers can be a bit reserved with strangers and will bark but is not aggressive.",
    friendliness_with_family: 5,
    good_with_children: 4,
    friendliness_with_strangers: 3,
    friendliness_with_dogs: 4,
    lifestyle: "Pointers need several hours of daily activity. They are great water dogs and love to swim, which is also a great way to achieve the amount of exercise they need. They love people and can become nervous and destructive if left alone for long periods. Regular exercise and companionship is a must. It is good to exercise Pointers off leash, but if you plan to leave them outside alone to play you will need at least a six-foot tall fence because they are accomplished escape artists.",
    energy: 5,
    apartment_adaptability: 1,
    independence: 2,
    grooming: 1,
    trainability: "Pointers want to please their people and will work hard for praise and positive reinforcement. They get bored easily and one of the most difficult things is to keep them focused on training. They are not stubborn and learn quickly.",
    intelligence: 4,
    noisiness: 3,
    prey_drive: 5,
    wanderlust: 5,
    common_health_issues: "Hip dysplasia",
    weight: "44-71 lbs",
    height: "21-25 in",
    coat_length: "Short",
    lifespan: "10-14 Years"
  },
  goldenRetriever: {
    breed: "Golden Retriever",
    description: "Golden retrievers are highly intelligent, sociable, beautiful and loyal. They can be lively and slow to mature, maintaining their playful puppy personality until they are three or four years old. Goldens were originally bred to retrieve water fowl for hunters, but are happy playing with their family in the yard or going for a hike. They are happiest with a job to do such as fetching the newspaper. They are excellent therapy dogs and guide dogs for the blind.",
    characteristics: "Friendly, social, loyal, caring, curious, playful",
    type: "Sporting",
    size: "Medium",
    rarity: false,
    hypoallergenic: false,
    friendliness: "Golden retrievers are family dogs and they want to be included in family activities.  They want to be with you at all times, love children, other animals and strangers and are consequently definitely not good watchdogs.",
    friendliness_with_family: 5,
    good_with_children: 5,
    friendliness_with_strangers: 5,
    friendliness_with_dogs: 5,
    lifestyle: "Golden Retrievers are family dogs and expect to be with their family at all times. They need to live indoors with their family and are lonely if left in the yard for extended periods of time. Goldens need 40-60 minutes of brisk walking or exercise each day.",
    energy: 4,
    apartment_adaptability: 4,
    independence: 2,
    grooming: 2,
    trainability: "Golden retrievers are intelligent, easy to train and eager to please. Although they are hard-wired with a good disposition they must be well-trained to make the most of their abilities. Like all dogs, Goldens need early socialization to grow up to be a well rounded dog.",
    intelligence: 5,
    noisiness: 3,
    prey_drive: 3,
    wanderlust: 2,
    common_health_issues: "Hip dysplasia, eye problems",
    weight: "55-75 lbs",
    height: "20-24 in",
    coat_length: "Long",
    lifespan: "12-13 Years"
  },
  greatDane: {
    breed: "Great Dane",
    description: "Great Danes are one of the tallest breeds of dogs. While their size might make you apprehensive, they one of the best-natured dogs around, commonly referred to as a gentle giant. A great Dane is a sweet, affectionate pet that is gentle with children.",
    characteristics: "Energetic, gentle, playful, friendly, dignified",
    type: "Working",
    size: "Large",
    rarity: false,
    hypoallergenic: false,
    friendliness: "Great Danes are sweet, affectionate companions who want to be everyone's best friend. They are gentle dogs who love children, but realize based on their size, an exuberant wag of a tail could topple a small child. Great Danes have a peaceful disposition but they would not hesitate to defend their family. Their powerful bark is probably the only defense mechanism needed.",
    friendliness_with_family: 5,
    good_with_children: 5,
    friendliness_with_strangers: 5,
    friendliness_with_dogs: 5,
    lifestyle: "Great Danes are indoor dogs. They are relatively apartment friendly because their exercise needs can be met with daily walks and they have a quiet, inactive nature. They are not major barkers, but realize when they do bark, it is loud! Due to their size, a small apartment or small house would not be ideal. A Great Dane can knock over furniture or clean off your coffee table with a single swipe of its tail. A Great Dane puppy can be rambunctious as are most puppys, but as they mature they are often described as couch potatoes. As with most large dogs, Great Danes are not good jogging companions until they are over 18 months old as it takes a while for the bones and joints of large dogs to stop growing and become stable.",
    energy: 2,
    apartment_adaptability: 4,
    independence: 3,
    grooming: 2,
    trainability: "Great Danes have a strong desire to please and are generally easy to train. Training is especially important because of the size of the dog. Obeying standard commands, such as sit, stay, down, come and heel make a Great Dane’s size more manageable. Great Danes love everyone and teaching them not to jump is a must, as is socialization beginning at an early age. Great Danes are affectionate and loving, but due to their size it is important for a new owner to commit to an appropriate training and socialization plan before making a life long commitment to this gentle giant.",
    intelligence: 3,
    noisiness: 2,
    prey_drive: 3,
    wanderlust: 3,
    common_health_issues: "Wobbler syndrome, osteoarthritis, bone cancer, bloat",
    weight: "101-120 lbs",
    height: "28-30 in",
    coat_length: "Short",
    lifespan: "6-8 Years"
  },
  havanese: {
    breed: "Havanese",
    description: "Bred as a companion dog, the Havanese is a great choice for a pet. They are a lively and affectionate breed that get along with pretty much everyone. The Havanese is not prone to excessive barking and can be comfortable in a small house or apartment. If you are considering adding a Havanese to your family be aware that they require a significant amount of grooming. A long walk in the woods might mean a long brushing session as a Havaneses fur can easily attract dirt and leaves.",
    characteristics: "Smart, social, affectionate, lively, friendly",
    type: "Toy",
    size: "Small",
    rarity: true,
    hypoallergenic: false,
    friendliness: "The Havanese is a very friendly breed. They are affectionate with their family and get along with other dogs as well as strangers. While the Havanese is great with children, it is a small breed can be easily injured. Children should be gentle when interacting with the dog. It is also important to watch over a Havanese when it is meeting new dogs as its unassuming nature might cause other dogs to bully it.",
    friendliness_with_family: 5,
    good_with_children: 4,
    friendliness_with_strangers: 5,
    friendliness_with_dogs: 5,
    lifestyle: "The Havanese is a very adaptable dog. While they enjoy a daily walk, this breed is not overly energetic and can be happy in an apartment. Be aware that this dog requires a lot of grooming.",
    energy: 3,
    apartment_adaptability: 5,
    independence: 2,
    grooming: 4,
    trainability: "This breed learns quickly and with consistency, is relatively easy to train.",
    intelligence: 4,
    noisiness: 2,
    prey_drive: 4,
    wanderlust: 2,
    common_health_issues: "Cherry eye, cataracts, deafness, patellar luxation",
    weight: "7-13 lbs",
    height: "9-11 in",
    coat_length: "Long",
    lifespan: "12-14 Years"
  },
  labradorRetriever: {
    breed: "Labrador Retriever",
    description: "Labrador Retrievers are calm and easy going but have plenty of energy to endlessly play fetch. They have a reputation for their versatility. They are good at hunting, search and rescue, are trained as service dogs and are great family dogs especially if you enjoy outdoor activities. A Lab’s sweet nature, also make them excellent therapy dogs.",
    characteristics: "Friendly, gentle, loyal, active, affectionate, lively",
    type: "Sporting",
    size: "Large",
    rarity: false,
    hypoallergenic: false,
    friendliness: "While the versatility of Labrador Retrievers is continually shifting and growing, the one role that has remained steadfast is that of wonderful companion and friend. Labs love to be part of the family and their constant devotion has never been questioned.  They love everyone and are good with children, although one has to understand that because of their size they can inadvertently knock a small child over with their tail.  The one job that Labs are not good at is that of guard dog, they are apt to welcome a burglar in the same manner they greet a family friend.",
    friendliness_with_family: 5,
    good_with_children: 5,
    friendliness_with_strangers: 5,
    friendliness_with_dogs: 5,
    lifestyle: "Labrador Retrievers need daily exercise and mental stimulation. This can be achieved with brisk daily walks and giving them work to do, which makes them a good choice for apartment living. Whether you live in an apartment or a house, Labs want to live with you, they are house dogs and are not happy being left outdoors by themselves. Labs are happy to participate in the active outdoor activities of their family including hiking, swimming and  hunting.",
    energy: 5,
    apartment_adaptability: 5,
    independence: 2,
    grooming: 1,
    trainability: "Labs are excellent dogs when it comes to training. They want to please, and love to work. They are trained to be therapy and assistance dogs as well as excelling at search and rescue. Labs are the dogs to beat at agility and obedience competitions, especially obedience.",
    intelligence: 5,
    noisiness: 3,
    prey_drive: 2,
    wanderlust: 3,
    common_health_issues: "Hip dysplasia, obesity",
    weight: "55-82 lbs",
    height: "22 in",
    coat_length: "Short",
    lifespan: "10-12 Years"
  },
  maltese: {
    breed: "Maltese",
    description: "This Maltese is one of the most gentle of small breed dogs. They were bred to be companion dogs. They are full of energy and playful making them great family dogs. They are charming always looking for attention and adept at getting their own way.",
    characteristics: "Gentle, affectionate, friendly, enjoys attention",
    type: "Toy",
    size: "Small",
    rarity: false,
    hypoallergenic: true,
    friendliness: "Malteses love to be with their people. They are a sweet, intelligent and devoted dogs that require a lot of human attention. If they become overly pampered by their owner they can, however, become intolerant of small children or other dogs. A Maltese is a small dog and even a well meaning child can handle them improperly.",
    friendliness_with_family: 5,
    good_with_children: 3,
    friendliness_with_strangers: 2,
    friendliness_with_dogs: 4,
    lifestyle: "Malteses are apartment friendly dogs. They like to be with their people and are not happy being left alone. They can easily get the chills from walking in damp areas. Malteses are very aware of their environment and are a good watchdog, alerting their owner to strangers or anything deemed a threat. They can, however, be overprotective, barking and biting anything perceived as a threat. Because of their small size they are not recommended for households with toddlers or small children.",
    energy: 3,
    apartment_adaptability: 5,
    independence: 4,
    grooming: 3,
    trainability: "Although your Maltese want to please you, they can be difficult to housetrain and crate training is recommended. Malteses have been trained as therapy dogs and compete in dog sports such as agility, obedience, rally and tracking.",
    intelligence: 4,
    noisiness: 2,
    prey_drive: 4,
    wanderlust: 1,
    common_health_issues: "Luxating patellas, portosystemic shunt, shaker dog syndrome",
    weight: "5-7 lbs",
    height: "8-10 in",
    coat_length: "Long",
    lifespan: "12-14 Years"
  },
  mastiff: {
    breed: "Mastiff",
    description: "Thousands of years ago Mastiffs were known to be a ferocious war dog. In modern times they have become an excellent companion dog for anyone who can manage his great size and ability to drool.",
    characteristics: "Devoted, dignified, loyal, courageous, determined",
    type: "Working",
    size: "Large",
    rarity: false,
    hypoallergenic: false,
    friendliness: "Mastiffs may appear fierce but they are good natured and docile with their family. If they perceive there is a threat to their family they will step up to protect them. If not properly socialized Mastiffs can become fearful of new situations which could lead to biting. Mastiffs love children but due its size can unintentionally knock over small children. ",
    friendliness_with_family: 5,
    good_with_children: 5,
    friendliness_with_strangers: 2,
    friendliness_with_dogs: 2,
    lifestyle: "Mastiffs can do well in a spacious apartment if exercised properly, but are happiest in a house with a yard. Mastiffs are house dogs and thrive when they are with their family. They become depressed and destructive when left outside by themselves. Mastiffs can be lazy and sometimes need to be encouraged to get daily exercise.",
    energy: 3,
    apartment_adaptability: 3,
    independence: 3,
    grooming: 3,
    trainability: "Training is extremely important for Mastiffs because of their large size and protection instincts. They need to be properly socialized with both people and animals so they will not become fearful of new situations. Their size and strength makes them dangerous if they don’t know how to interact properly. Mastiffs can be stubborn but respond well to positive reinforcement and can be trained to be well-mannered.",
    intelligence: 2,
    noisiness: 1,
    prey_drive: 2,
    wanderlust: 1,
    common_health_issues: "Hip Dysplasia, bloat, gastric torsion",
    weight: "175-190 lbs",
    height: "28-30 in",
    coat_length: "Short",
    lifespan: "10-12 Years"
  },
  miniatureSchnauzer: {
    breed: "Miniature Schnauzer",
    description: "Miniature Schnauzers are lively and active dogs. They have larger than life personalities and will want to follow you all around the house participating in everything you do.",
    characteristics: "Friendly, obedient, intelligent, alert",
    type: "Terrier",
    size: "Small",
    rarity: false,
    hypoallergenic: false,
    friendliness: "Miniature Schnauzers are loyal to their families and demand a great deal of attention from them. They are not the best choice for families with small children and are wary of strangers and other animals.",
    friendliness_with_family: 5,
    good_with_children: 3,
    friendliness_with_strangers: 3,
    friendliness_with_dogs: 3,
    lifestyle: "Miniature Schnauzers need more exercise than a walk around the block.They are energetic and love participating in everything you do. They will follow you around the house and alert you if someone is at the door or if there is a leaf falling to the ground. They have a tendency toward barking which can be curbed with training. Miniature Schnauzers were originally bred to eradicate rodents on farms. For this reason it is not advisable to leave these dogs with small pets.",
    energy: 4,
    apartment_adaptability: 4,
    independence: 3,
    grooming: 2,
    trainability: "Miniature Schnauzers are very intelligent and learn quickly. These dogs can learn anything but particularly love to learn tricks. Barking can be a problem but can be curbed with training. Miniature Schnauzers can be stubborn and it is important to remain in charge, but ultimately they can be easily trained. They excel in earthdog trials as well as well as obedience and agility competitions.",
    intelligence: 5,
    noisiness: 4,
    prey_drive: 4,
    wanderlust: 3,
    common_health_issues: "Entropion, cataracts, progressive retinal atrophy",
    weight: "13-15 lbs",
    height: "13-14 in",
    coat_length: "Medium",
    lifespan: "12-15 Years"
  },
  newfoundland: {
    breed: "Newfoundland",
    description: "The Newfoundland is a large strong dog breed, used to hard work. While they excel at pulling nets for fishermen and hauling wood from the forest Newfoundlands are calm, sweet  and friendly, making them a wonderful family companion.",
    characteristics: "Relaxed, friendly, adaptable, playful",
    type: "Working",
    size: "Large",
    rarity: false,
    hypoallergenic: false,
    friendliness: "Newfoundlands are true gentle giants. Their docile temperament and love of children makes them an excellent family dog as long as you don’t mind lots of slobber. They are devoted to their people.",
    friendliness_with_family: 5,
    good_with_children: 5,
    friendliness_with_strangers: 4,
    friendliness_with_dogs: 4,
    lifestyle: "Newfoundlands are indoor dogs devoted to their family. They enjoy outdoor activities but extensive exercise during the first two years of their lives is not recommended, as their growth plates are still forming. Newfies enjoys swimming, hiking, jogging and are excellent swimmers. They are sensitive to heat and should be indoors when it is hot out.",
    energy: 3,
    apartment_adaptability: 3,
    independence: 1,
    grooming: 3,
    trainability: "Newfoundlands learn quickly and there is little this dog can't do. Training should begin early before the puppy is too big to manage. Newfoundlands want to please and have a strong work ethic. The need mental as well as physical stimulation. Ongoing training and dog sports are good choices for these dogs.",
    intelligence: 4,
    noisiness: 3,
    prey_drive: 4,
    wanderlust: 3,
    common_health_issues: "Subaortic stenosis",
    weight: "110-152 lbs",
    height: "26-28 in",
    coat_length: "Medium",
    lifespan: "9-11 Years"
  },
  papillon: {
    breed: "Papillon",
    description: "Although Papillons once graced the laps of kings and queens, they are probably not the best choice if you are looking for a lap dog, they are doers not cuddlers. These dogs are bright, busy and curious and likely to be flitting around looking for something to do. They will happily rid your house of rodents and are protective of their family, taking the duties as guardian seriously.",
    characteristics: "Friendly, smart, adaptable, active",
    type: "Toy",
    size: "Small",
    rarity: false,
    hypoallergenic: false,
    friendliness: "Papillons are outgoing and energetic. They love to be with people and friendly with everyone. Papillons love children, but because of their small size they can be  inadvertently injured by children. Papillons get along well with other dogs and will often boss around dogs much larger than they are.",
    friendliness_with_family: 5,
    good_with_children: 3,
    friendliness_with_strangers: 5,
    friendliness_with_dogs: 4,
    lifestyle: "Papillons are adaptable to apartment life. They have been bred as companion dogs and don’t do well in a household when there is little time for a dog. Dogs are fragile and can be injured by rough play.",
    energy: 4,
    apartment_adaptability: 5,
    independence: 2,
    grooming: 3,
    trainability: "Papillons are highly trainable and early socialization helps ensure your pup grows up into a well-rounded dog. They are a great choice if you want to participate in dog sports such as agility or rally. Papillons are also excellent competitors in obedience. ",
    intelligence: 4,
    noisiness: 2,
    prey_drive: 4,
    wanderlust: 1,
    common_health_issues: "Progressive retinal atrophy, patellar luxation",
    weight: "5-11 lbs",
    height: "8-11 in",
    coat_length: "Medium",
    lifespan: "12-14 Years"
  },
  pembrokeWelshCorgi: {
    breed: "Pembroke Welsh Corgi",
    description: "Pembroke Welsh Corgis are natural herding dogs. As a result they may herd children by nipping at their heels while they play. These days they are most often seen as family dogs. Corgis are athletic and surprisingly fast. They can be a bit stubborn, have an independent streak and like to think for themselves.",
    characteristics: "Smart, assertive, playful, energetic",
    type: "Herding",
    size: "Medium",
    rarity: false,
    hypoallergenic: false,
    friendliness: "Pembrokes are very with their family and can be a good option for a family with children. If you have children it is important for them to be gentle with the dog as they are prone to back injuries. While these dogs are friendly they can be protective of their family and could be suspicious of other dogs and strangers.",
    friendliness_with_family: 5,
    good_with_children: 4,
    friendliness_with_strangers: 3,
    friendliness_with_dogs: 4,
    lifestyle: "Pembroke Welsh Corgis love physical activity and are happiest when they have a job. They are indoor dogs that like to spend time with their family. Pembrokes are watchful dogs and bark to alert you if someone is approaching the house. They can become a nuisance barker but this can be curbed with training. Pembrokes need exercise and love long walks and hikes. They  adapt well to apartments life as long as they get exercise.",
    energy: 4,
    apartment_adaptability: 5,
    independence: 3,
    grooming: 3,
    trainability: "Pembrokes respond to kind, firm, consistent training. They can become nuisance barkers but can be trained to curb this behavior. They can sometimes be difficult to house train in which crate training is suggested. Pembrokes do well when trained for dog sports including herding, flyball, obedience, rally and tracking.",
    intelligence: 5,
    noisiness: 5,
    prey_drive: 3,
    wanderlust: 2,
    common_health_issues: "Intervertebral disk disease, progressive renal atrophy",
    weight: "22-31 lbs",
    height: "10-12 in",
    coat_length: "Medium",
    lifespan: "12-15 Years"
  },
  pomeranian: {
    breed: "Pomeranian",
    description: "Pomeranians are loyal companions who love being around their owners. They have a natural desire to please and are protective of their people. They are friendly, playful and energetic and well suited for companionship.",
    characteristics: "Lively, loyal, affectionate, alert, energetic, enjoys attention",
    type: "Toy",
    size: "Small",
    rarity: false,
    hypoallergenic: false,
    friendliness: "Pomeranians are not protective, but are suspicious of strangers and can bark a lot, this is good to a point but excessive barking can be a difficult behavior to manage and can be curbed with training. Pomeranians are friendly toward children but because of their small size a child can inadvertently injure them. Pomeranians are an excellent pet for older people as they are not overly dependent.",
    friendliness_with_family: 5,
    good_with_children: 2,
    friendliness_with_strangers: 3,
    friendliness_with_dogs: 2,
    lifestyle: "Pomeranians are well suited for apartment life. They don’t need much exercise and are happy with a walk during the day. They are also well suited to people who are frequently away or busy. Never leave your Pomeranian outside without supervision as predatory birds can injure it. When Pomeranians are outdoors they can become overheated and suffer from heat stroke.",
    energy: 3,
    apartment_adaptability: 5,
    independence: 4,
    grooming: 2,
    trainability: "Pomeranians are easy to train, but you must establish yourself as the leader of the pack in your household. If they battle for this position they can become snappish. Training must be consistent and firm. Pomeranians listen, pay attention and learn commands with fewer repetitions than other dogs. They love learning new tricks and being the center of attention. They have a short attention span so training sessions should be brief and fun. Pomeranians can be difficult to house train in which case crate training is recommended.",
    intelligence: 4,
    noisiness: 5,
    prey_drive: 2,
    wanderlust: 1,
    common_health_issues: "Luxating patellas",
    weight: "5-7 lbs",
    height: "9-11 in",
    coat_length: "Long",
    lifespan: "12-15 Years"
  },
  poodle: {
    breed: "Poodle",
    description: "Poodles are affectionate family dogs breed originally as a water retriever. Their job was to jump into the water to fetch waterfowl for hunters. The original purpose of the elaborate coat styling was to lighten the dog’s coat so it wouldn’t snag on underwater debris, while the long hair protected the dog from the cold. Poodles have playful yet dignified personality with keen intelligence. They are people friendly dogs who want to stay close to their families.",
    characteristics: "Responsive, smart, loyal, lively, playful",
    type: "Non Sporting",
    size: "Medium",
    rarity: false,
    hypoallergenic: true,
    friendliness: "Poodles are intelligent, loving, loyal and mischievous. They are  always up for a game, fond of people and eager to please. They are protective of their home and family and wary of strangers. Poodles with their boundless energy and sunny disposition easily charm everyone they meet.",
    friendliness_with_family: 5,
    good_with_children: 5,
    friendliness_with_strangers: 4,
    friendliness_with_dogs: 4,
    lifestyle: "Poodles adapt well to apartments, in fact they are happy in any type of home. They need exercise but a daily walk keeps them happy. Poodles are indoor dogs and need human companionship. ",
    energy: 4,
    apartment_adaptability: 5,
    independence: 1,
    grooming: 4,
    trainability: "Poodles are very intelligent dogs and easy train. Obedience training is essential to not only teach the dog manners but to keep their mind working as well. When working with a Poodle you must be the leader of the pack or the poodle will try to demonstrate that they are the alpha dog. When a Poodle isn’t busy learning or working they will find destructive ways to occupy themselves.",
    intelligence: 5,
    noisiness: 2,
    prey_drive: 2,
    wanderlust: 3,
    common_health_issues: "Progressive retinal atrophy, heart problems, epilepsy",
    weight: "46-70 lbs",
    height: "15-18 in",
    coat_length: "Long",
    lifespan: "12-14 Years"
  },
  pug: {
    breed: "Pug",
    description: "Pugs are a sturdy, compact dogs who love being the clown of the canine world. They were bred to be a lap dog and thrive on human contact. Pugs love to be the center of attention and depressed if they are ignored. They are playful and always ready to play games.",
    characteristics: "Affectionate, quiet, adaptable, attentive, friendly",
    type: "Toy",
    size: "Small",
    rarity: false,
    hypoallergenic: false,
    friendliness: "Pugs are very attached to their family. Expect your Pug to follow you around the house, sit in your lap and want to sleep in your bed at night. Pugs are good watchdogs as they are attentive to their environment, but they are not yappy. If trained and well socialized they get along with other animals and children.",
    friendliness_with_family: 5,
    good_with_children: 4,
    friendliness_with_strangers: 4,
    friendliness_with_dogs: 4,
    lifestyle: "Pugs adapt well to apartment living. They are small, quiet and relatively inactive indoors. A Pug’s face is flat and has a short muzzle, this makes it difficult for them to handle heat and humidity. They should never be kept outdoors.",
    energy: 3,
    apartment_adaptability: 5,
    independence: 1,
    grooming: 1,
    trainability: "Pugs can be stubborn and difficult to housebreak. Crate training is recommended. Pugs were bred to be companions and that is what they do best. They tend to be sedentary and like to sit on your lap. It is always good to socialize your Pug and teach them basic dog manners, but they are generally not interested in more.",
    intelligence: 2,
    noisiness: 2,
    prey_drive: 3,
    wanderlust: 2,
    common_health_issues: "Eye and respiratory problems, obesity, diabetes and heart disease",
    weight: "13-18 lbs",
    height: "10-11 in",
    coat_length: "Short",
    lifespan: "12-15 Years"
  },
  rottweiler: {
    breed: "Rottweiler",
    description: "Rottweilers were originally bred to drive cattle to market. They were among the first police dogs and served in the military. Rottweilers are now popular as family guardians and friends.A Rottweiler is strong and true with a loving heart.",
    characteristics: "Courageous, responsive, bold, protective, smart",
    type: "Working",
    size: "Large",
    rarity: false,
    hypoallergenic: false,
    friendliness: "Rottweilers are natural guard dogs with a mellow disposition. They instinctively protect their families and can be ferocious in their defense. If raised with children Rottweilers get along fine with them. Rotties have a natural instinct to herd and may bump children to herd them.  Some dogs have a strong prey drive and may get overly excited when children run and play. Well-bred, well-socialized Rotties are playful, gentle and loving to their families. An untrained Rottweiler can become overly protective, aggressive and a danger to everyone.",
    friendliness_with_family: 5,
    good_with_children: 3,
    friendliness_with_strangers: 3,
    friendliness_with_dogs: 2,
    lifestyle: "In some areas you may not be allowed to own a Rottweiler or you may need to carry extra liability insurance to own one. A Rottweiler is a homebody. It is important for them to live in the home with their people. If left alone in the backyard for long periods of time they become bored, destructive and aggressive. Rottweilers enjoy a 10 - 20 minute walk each day but generally have a low energy level.",
    energy: 3,
    apartment_adaptability: 2,
    independence: 1,
    grooming: 1,
    trainability: "A Rottweiler’s athleticism, intelligence and trainability make them well suited to agility and obedience training as well as tracking. They thrive on mental stimulation and like to learn new things. Although they can be willful at times, they are  eager to please. Be fair, consistent and firm and your Rottweiler will learn quickly.",
    intelligence: 5,
    noisiness: 4,
    prey_drive: 4,
    wanderlust: 2,
    common_health_issues: "Obesity, heart disease",
    weight: "84-130 lbs",
    height: "23-27 in",
    coat_length: "Short",
    lifespan: null
  },
  shetlandSheepdog: {
    breed: "Shetland Sheepdog",
    description: "Shetland Sheepdogs once stood guard for farmers in Scotland, keeping hungry birds and sheep out of the gardens. They were often used for herding as well. Today they excel at dog sports and are excellent family companions.",
    characteristics: "Active, friendly, smart, loyal, protective ",
    type: "Herding",
    size: "Medium",
    rarity: false,
    hypoallergenic: false,
    friendliness: "Shetland Sheepdogs are loving family dogs and are good with children. They can be reserved or shy around strangers. They bark if they feel something is wrong and this trait can become a nuisance, but they are excellent watchdogs. They must be taught to discriminate what is truly a danger. Their herding instinct is strong and they may try to herd small animals and even children, running around them, barking and even nipping. This behavior should be discouraged.",
    friendliness_with_family: 5,
    good_with_children: 4,
    friendliness_with_strangers: 3,
    friendliness_with_dogs: 4,
    lifestyle: "Shelties handle apartment life well. The are relatively inactive indoors and are happy if they are walked daily. They are sometimes recreation barkers but with training this problem can be solved. If they are not walked daily, they need a fenced yard. Shelties are a good choice for someone who works. They are happy to stay home alone as long as there is plenty of attention when their people are home.",
    energy: 4,
    apartment_adaptability: 3,
    independence: 4,
    grooming: 2,
    trainability: "Shelties need to be trained to stop barking on command at an early age. They are extremely intelligent but can be stubborn. Make training fun and allow them time to make up their own minds to do what you want them to do. Shelties thrive on activities and training that give them both mental and physical exercise, such as agility and flyball.",
    intelligence: 5,
    noisiness: 4,
    prey_drive: 3,
    wanderlust: 2,
    common_health_issues: "Collie eye anomaly",
    weight: "13-37 lbs",
    height: "14-15 in",
    coat_length: "Long",
    lifespan: "12-13 Years"
  },
  shibaInu: {
    breed: "Shiba Inu",
    description: "The Shiba Inu is known for a bold, fiery personality. This breed from Japan is interesting, intelligent and strong-willed. They approach the world with calm dignity and the feeling of superiority which is perhaps why they have also been described as stubborn.",
    characteristics: "Spirited boldness, good nature, alertness",
    type: "Non Sporting",
    size: "Small",
    rarity: false,
    hypoallergenic: false,
    friendliness: "The Shiba Inu is a good family dog and is loyal and devoted. They get along with children as long as they are properly socialized and trained and the children treat them kindly and respectfully. Shiba Inus are dog-aggressive and cannot be trusted off leash. They are generally suspicious of strangers.",
    friendliness_with_family: 4,
    good_with_children: 3,
    friendliness_with_strangers: 3,
    friendliness_with_dogs: 3,
    lifestyle: "Shiba Inus need a good daily workout. They are best suited for a home with a securely fenced yard, but are also happy in an apartment. The enjoy walking in a neighborhood but must be on a leash at all times.",
    energy: 3,
    apartment_adaptability: 5,
    independence: 3,
    grooming: 2,
    trainability: "The Shiba Inu is not easy to train. Socialization and training to work on basic canine manners should begin early. Another trait of the breed is possessiveness. Proper socialization helps minimize this characteristic. It is best to work with a trainer who understands the the breed’s indepence.",
    intelligence: 4,
    noisiness: 4,
    prey_drive: 3,
    wanderlust: 4,
    common_health_issues: "Hip dysplasia, patellar luxation and eye problems",
    weight: "15-24 lbs",
    height: "15-16 in",
    coat_length: "Medium",
    lifespan: "12-15 Years"
  },
  shihTzu: {
    breed: "Shih Tzu",
    description: "Shih Tzus have a friendly temperament and has many numerous positive traits including affection, loyalty and extroversion. The were bred to be companion dogs and their  purpose in life is to love and be loved.",
    characteristics: "Friendly, playful, affectionate, assertive",
    type: "Toy",
    size: "Small",
    rarity: false,
    hypoallergenic: false,
    friendliness: "Shih Tzus are bred to be companion dogs. The are affectionate with their family and do well with other pets. They do not do well with children but partially due to their small size they are at a disadvantage with small children. Children can be inadvertently rough and it is difficult for a small dog to handle. Shih Tzus will bark when a stranger is present, but could never be considered a watchdog.",
    friendliness_with_family: 5,
    good_with_children: 3,
    friendliness_with_strangers: 5,
    friendliness_with_dogs: 4,
    lifestyle: "Shih Tzus are happy in any type of home and easily adapt to apartments. They don’t require much exercise, running across the furniture is a good track course for them. Shih Tzus are not suited to live outside. They are prone to eating their own or other animals feces, poop must be cleaned up immediately. A Shih Tzu is a good choice of dog for people who are frequently away or busy as they are happy on their own until your return.",
    energy: 2,
    apartment_adaptability: 5,
    independence: 4,
    grooming: 3,
    trainability: "It may take a little more time to train and house train a Shih Tzu, but patience and perseverance will pay off in the end. They are good in obedience class and can do agility and  are obedience competitions.",
    intelligence: 4,
    noisiness: 5,
    prey_drive: 4,
    wanderlust: 2,
    common_health_issues: "Periodontal disease, luxating patellas, renal dysplasia, progressive retinal atrophy, proptosis",
    weight: "11-18 lbs",
    height: "8-11 in",
    coat_length: "Long",
    lifespan: "10-16 Years"
  },
  siberianHusky: {
    breed: "Siberian Husky",
    description: "Siberian Huskies are athletic, intelligent dogs. They are affectionate to everyone and do well in multi-dog homes. They can be a challenge for first- time dog owners. They were first bred as sled dogs and their ability to learn is staggering.",
    characteristics: "Responsive, friendly, active, gentle, determined",
    type: "Working",
    size: "Medium",
    rarity: "false",
    hypoallergenic: "false",
    friendliness: "Siberian Huskies are affectionate with everyone, but don't constantly demand attention. They are friendly and not aggressive, welcoming everyone into their homes, even intruders. They do well with children and other dogs.",
    friendliness_with_family: 5,
    good_with_children: 5,
    friendliness_with_strangers: 5,
    friendliness_with_dogs: 5,
    lifestyle: "Siberian Huskies do well in homes with multiple dogs. Some Huskies manage apartment life but it is not prefered. They enjoy a yard to play in but need a secure fence that is sunk into the ground to prevent escapes. Expect them to dig up your yard. They should always be on a leash for walks. Siberian Huskies should be crated when left in your house, they can destroy a house and cause a wide variety of damage.",
    energy: 5,
    apartment_adaptability: 2,
    independence: 1,
    grooming: 2,
    trainability: "Siberian Huskies are extremely difficult to train. They are intelligent and independent and not overly eager to please people. They need a confident, experienced dog owner who will set rules and deliver consistency. This is a dog who definitely needs obedience training.",
    intelligence: 3,
    noisiness: 5,
    prey_drive: 3,
    wanderlust: 5,
    common_health_issues: "Progressive Retinal Atrophy",
    weight: "35-60 lbs",
    height: "20-24 in",
    coat_length: "Medium",
    lifespan: "12-15 Years"
  },
  softCoatedWheatenTerrier: {
    breed: "Soft Coated Wheaten Terrier",
    description: "More relaxed than most terriers, the Soft Coated Wheaten Terrier is lively, outgoing and playful. These dogs have lots of energy and need a good amount of exercise to keep them content. Friendly, as well as playful, Wheaten Terriers get along with almost everyone. While these dogs can be good with kids, it's important that they get enough exercise. If a Wheaten Terrier does not get enough exercise they can be a bit over exuberant. As a dog that does not shed, Wheaten terriers also require a significant amount of grooming. To keep their hair soft and detangled, they need to be brushed often.",
    characteristics: "Smart, lively, independant, active, friendly",
    type: "Terrier",
    size: "Medium",
    rarity: false,
    hypoallergenic: true,
    friendliness: "Wheaten Terriers are very friendly and with enough exercise and socialization they can be great with kids, strangers and other dogs. These dogs are very devoted and affectionate to their families and can be good choice for a family pet.",
    friendliness_with_family: 5,
    good_with_children: 5,
    friendliness_with_strangers: 4,
    friendliness_with_dogs: 5,
    lifestyle: "With enough exercise Wheaton Terriers can be very adaptable. They are comfortable in both cool and warm climates and can be content living in an apartment. Because these dogs enjoy exercise and playing outside, their hair can be a bit difficult to groom. As a non-shedding dog, Wheaten Terriers need to be brushed regularly to keep their hair from becoming matted and difficult to manage.",
    energy: 4,
    apartment_adaptability: 4,
    independence: 3,
    grooming: 4,
    trainability: "Training should begin at a young age. Wheaton Terriers are trainable but can become set in their ways and stubborn if not trained properly. Wheaton Terriers can be prone to a few bad behaviors such as jumping and pulling on a leash. If a dog shows these behaviors, they should be corrected as quickly as possible.",
    intelligence: 4,
    noisiness: 2,
    prey_drive: 3,
    wanderlust: 2,
    common_health_issues: "Renal dysplasia, Addison's Disease",
    weight: "35-46 lbs",
    height: "18-19 in",
    coat_length: "Long",
    lifespan: "13-14 Years"
  },
  saintBernard: {
    breed: "Saint Bernard",
    description: "Saint Bernards did, in fact, rescue people in the cold and guarded the grounds of Switzerland’s Hospice Saint Bernard. Saint Bernards are kind, gentle, intelligent and good-natured. They are also a very large, but despite their size they are quiet indoor dogs who make a wonderful friends. A Saint Bernard doesn’t need a large house, they can also manage in an apartment, but these dogs are not the best housekeepers. They have a tendency to drool and shed and track in mud and dirt. ",
    characteristics: "friendly, gentle, enthusiastic, drooly, easygoing ",
    type: "Working",
    size: "Large",
    rarity: false,
    hypoallergenic: false,
    friendliness: "Saint Bernards are devoted to their families and patient with children. Their size can be challenging for young children as they can be accidently knocked over with a swipe of a tail. They are not aggressive, but would bark if they felt there was cause. They love attention but do not demand it.",
    friendliness_with_family: 5,
    good_with_children: 5,
    friendliness_with_strangers: 5,
    friendliness_with_dogs: 5,
    lifestyle: "Although they are large, Saint Bernards can live in small quarters with a good daily walk or access to a yard. They do not need much exercise and are not a dog that would be a good jogging companion. They suffer from heat exhaustion and do better in cooler climates. Saint Bernards are calm, gentle dogs devoted to their family. They need to live indoors and thrive with human companionship. They do have a tendency to be messy and drooling is just part of having a Saint Bernard.",
    energy: 3,
    apartment_adaptability: 3,
    independence: 1,
    grooming: 2,
    trainability: "Training and socialization should start as early as possible with a Saint Bernard. They are easiest to train when they are still a manageable size. They want to please but can sometimes be stubborn.",
    intelligence: 4,
    noisiness: 1,
    prey_drive: 1,
    wanderlust: 2,
    common_health_issues: "Blood clotting, bone cancer",
    weight: "130-180 lbs",
    height: "28-30 in",
    coat_length: "Medium",
    lifespan: "8-10 Years"
  },
  vizsla: {
    breed: "Vizsla",
    description: "Vizsla were originally bred to be hunters and pointers. They are, however, an excellent companion for an active family who can give them love and exercise. Many dogs love their family but Vizslas are especially attached to their people. When they are not running, hiking or playing with you, they will likely be leaning against your leg, sleeping on your feet, always your shadow. A Vizslas biggest fear is being separated from his family.",
    characteristics: "Affectionate, loyal, energetic, quiet",
    type: "Sporting",
    size: "Medium",
    rarity: false,
    hypoallergenic: false,
    friendliness: "Vizslas adore their family, they can not live outside away from the ones they love. The suffer from separation anxiety if left alone for very long. They are not as good with children as some dogs and their hunting abilities make them a poor choice if you have other small pets.",
    friendliness_with_family: 5,
    good_with_children: 3,
    friendliness_with_strangers: 3,
    friendliness_with_dogs: 3,
    lifestyle: "Vizslas need to live in a home with an active, loving family. The need regular exercise, at least 60 minutes a day, and are wonderful companions for running, hiking, hunting or just outdoor play. A Vizsla who is bored will develop bad habits like digging. They like to have a job to do, this could be as a jogging buddy, therapy dog or hunting companion. Vizslas let you know their opinion about everything by whining, moaning for finding other noises to express their viewpoint. They need both mental and physical stimulation and they are not a dog who is happy left alone. Vizslas are not a good fit for families with small pets such as rabbits and guinea pigs as they are excellent hunting dogs.",
    energy: 5,
    apartment_adaptability: 2,
    independence: 2,
    grooming: 1,
    trainability: "Vizslas do well with gentle consistent training. Training and socialization should start at an early age, before bad habits like digging begin. They become shy and timid if they are not properly socialized. Vizslas need mental as well as physical exercise, they are good at mental puzzles and can also be trained for guide dogs, drug-detection dogs and search and rescue.",
    intelligence: 5,
    noisiness: 4,
    prey_drive: 2,
    wanderlust: 5,
    common_health_issues: "Hemophilia",
    weight: "49-66 lbs",
    height: "21-25 in",
    coat_length: "Short",
    lifespan: "13-14 Years"
  },
  weimaraner: {
    breed: "Weimaraner",
    description: "Weimaraners were bred to be gundogs to manage big game. These dogs continue to be excellent hunting dogs, but are outstanding family friends as well.  Although Weimaraners are hunting dogs, they are not happy living outdoors. They are happiest living close to their family where they can receive lots of attention. They are high strung dogs and can suffer from separation anxiety if they are left alone for very long. They do best with lots of exercise and mental stimulation.",
    characteristics: "Friendly, loyal, versatile, active",
    type: "Sporting",
    size: "Large",
    rarity: false,
    hypoallergenic: false,
    friendliness: "Weimaraners love their families and are devoted to them. They need lots of attention and affection in return. They are not the best choice for families with young children.  They can be rambunctious and chase small children who are running. They also don't do well with cats, small dogs, rabbits or other small pets. They are also hunting dogs and have a strong prey drive. They will chase, catch and kill any furry animals they see.",
    friendliness_with_family: 5,
    good_with_children: 4,
    friendliness_with_strangers: 4,
    friendliness_with_dogs: 3,
    lifestyle: "Weimaraners need lots of exercise and mental stimulation. Without this they can become high strung. Without enough exercise they can use their high intelligence to figure out how to get into trouble. They want to be close to their family at all times, not just in the same room but touching if at all possible. In addition to chasing anything that resembles prey, they will chase joggers and bicyclists. A secure backyard and a strong leash are equipment you will need with a Weimaraner.",
    energy: 5,
    apartment_adaptability: 1,
    independence: 1,
    grooming: 1,
    trainability: "Weimaraners are intelligent dogs with a mind of their own. Firm, consistent gentle training should continue for their entire life. They benefit from mental stimulation. They are very intelligent and learn quickly. If these skills are not channeled properly they can become destructive and learn things like how to open doors and escape.",
    intelligence: 5,
    noisiness: 2,
    prey_drive: 5,
    wanderlust: 5,
    common_health_issues: "Skin ailments, umbilical hernias",
    weight: "50-90 lbs",
    height: "22-27 in",
    coat_length: "Short or Long",
    lifespan: "12-13 Years"
  },
  westHighlandWhiteTerrier: {
    breed: "West Highland White Terrier",
    description: "Westies are happy living just about anywhere. They are energetic, people-oriented dogs. They are instinctive hunters and will spend little time lounging on your lap. They have high energy levels and prefers to dig, run and pounce on small furry animals.They are independent animals who like to be doing something all the time. ",
    characteristics: "Friendly, alert, independent",
    type: "Terrier",
    size: "Small",
    rarity: false,
    hypoallergenic: false,
    friendliness: "Westies love their family and need to live indoors. If they spend too much time outdoors away from their family they become, noisy, unhappy and very destructive. They are good in multiple dog households (a household with 2 intact males is not a good idea) Westies like children but are better suited for older children.",
    friendliness_with_family: 5,
    good_with_children: 4,
    friendliness_with_strangers: 3,
    friendliness_with_dogs: 5,
    lifestyle: "Westies are adaptable and are happy in any type home, they do well in apartments but will need bark training. Lots of exercise and playing helps to cure nuisance barking and digging. A Westie can be left for long periods of time while his people are working or busy. They are good with multiple dogs, can get used to cats but do not do well with small animals such as gerbils or guinea pigs. ",
    energy: 4,
    apartment_adaptability: 4,
    independence: 3,
    grooming: 3,
    trainability: "Westies are generally easy to train. They are well suited for training to compete in earthdog trials, this stimulates their mind and channels their energy. Westies usually need training to curtail excessive barking.",
    intelligence: 4,
    noisiness: 4,
    prey_drive: 4,
    wanderlust: 3,
    common_health_issues: "Atopic dermatitis, luxating patellae, addison’s disease",
    weight: "15-22 lbs",
    height: "10-11 in",
    coat_length: "Medium",
    lifespan: "9-15 Years"
  },
  yorkshireTerrier: {
    breed: "Yorkshire Terrier",
    description: "The Yorkshire Terriers are feisty little dogs who are devoted to their family. They are affectionate to their families but sometimes suspicious of everyone else and will bark at strangers and unfamiliar sounds. They desire lots of time and attention from their family. Yorkies enjoy traveling with their owners wherever they go.",
    characteristics: "Brave, smart, persistent, curious, lively",
    type: "Toy",
    size: "Small",
    rarity: false,
    hypoallergenic: false,
    friendliness: "Yorkies love their families and are happy to go everywhere with them. They bark often signaling to their people that there is a strange sound or person. Yorkies are aggressive toward strange dogs and even squirrels. Because of their small size they are better with older children who have been taught how to respect them rather than small children or toddlers.",
    friendliness_with_family: 4,
    good_with_children: 2,
    friendliness_with_strangers: 2,
    friendliness_with_dogs: 3,
    lifestyle: "Yorkies can adapt to any house or apartment. Their biggest problem with apartment living is barking and this can be curbed with training. Yorkies have delicate digestive systems and can be picky eaters. They do best with adults or older children and get along living with other dogs and cats. If a new pet is added they may want to challenge the new addition. Take care to introduce a Yorkie to a new pet.",
    energy: 3,
    apartment_adaptability: 5,
    independence: 2,
    grooming: 2,
    trainability: "Yorkies can be difficult to housetrain, crate training may be the solution to this problem. Early and constant training for barking is important, if you are not making progress, you may need to consult a professional dog trainer. Socialize your dog early, Yorkies are known for trying to pick fights with bigger dogs. Learn how to keep your dog under control and consider a dog obedience class.",
    intelligence: 3,
    noisiness: 4,
    prey_drive: 2,
    wanderlust: 3,
    common_health_issues: "Patellar luxation",
    weight: "4-7 lbs",
    height: "8-9 in",
    coat_length: "Long",
    lifespan: "12-15 Years"
  }
}

// Create an Array of Dog Breeds
var dogBreedArray = []

//Add the properties(objects) in the DogBreeds Object into the Dog Breeds Array
for (var property in dogBreeds) {
  dogBreedArray.push(property);
}

// Sort the Array of dog breeds alphebetically
// Sort a-z
// dogBreedArray.sort();
// sort z-a
// dogBreedArray.reverse();

var body= document.querySelector("body");

// List Dog Breeds
function list (array) {
  for (i = 0; i < dogBreedArray.length; i++) {

    // Create hr element
    var hr = document.createElement("hr");

    // Create div element to contain list item
    var div = document.createElement("div");
    div.className = "list row small-12 columns breedList";
    body.appendChild(div);

    // Create div element to contain an image of the dog breed
    var div3 = document.createElement("div");
    div3.className = "large-4 columns";
    div.appendChild(div3);

    // Create div element to contain the dog breed name, description and show breed button
    var div2 = document.createElement("div");
    div2.className = "large-8 columns";
    div.appendChild(div2);

    // Create img element that displays an image of the dog breed
    var img = document.createElement("img");
    img.setAttribute("src", "assets/img/breeds/" + (dogBreedArray[i]) + "-small.jpg");
    img.setAttribute("alt", (dogBreeds[dogBreedArray[i]].breed));
    div3.appendChild(img);

    // Create h2 element with the dog breeds name
    var h2 = document.createElement("h2");
    var h2Text = document.createTextNode(dogBreeds[dogBreedArray[i]].breed);
    h2.appendChild(h2Text);
    div2.appendChild(h2);

    // Create p element with the dog breeds descripton
    var p = document.createElement("p");
    var pText = document.createTextNode(dogBreeds[dogBreedArray[i]].description);
    p.appendChild(pText);
    div2.appendChild(p);

    // Create show breed button that calls the function showBreed
    var a = document.createElement("a");
    a.className = "button";
    a.setAttribute("id", dogBreedArray[i]);
    a.addEventListener("click", showBreed);
    var aText = document.createTextNode("Learn More");
    a.appendChild(aText);
    div2.appendChild(a);

    // Add hr at bottom of div
    div.appendChild(hr);
  }
}

// <i class="fa fa-arrow-left" aria-hidden="true"></i>
// List the dog breeds
list(dogBreedArray);

// Generates an image of a selected dog breed
function breedImage() {
  document.querySelector("#breedImage").innerHTML ="";
  // Create Image of Dog Breed
  var div = document.querySelector("#breedImage");
  var img = document.createElement("img");
  img.setAttribute("src", "assets/img/breeds/" + (dogBreedArray[i]) + ".jpg");
  img.setAttribute("alt", (dogBreeds[dogBreedArray[i]].breed));
  div.appendChild(img);
}

// Create back link for single breed view
function goBack(link, text) {
  var buttonContainer = document.querySelector("#back");
  // Create link
  var back = document.createElement('a');
  // back.setAttribute('class', 'button');
  back.setAttribute('href', link);
  // Create back arrow
  var backIcon= document.createElement("i");
  backIcon.className = "fa fa-arrow-left";
  back.appendChild(backIcon)
  var backText = document.createTextNode(" "+text);
  back.appendChild(backText);
  //add link to buttonContainer
  buttonContainer.appendChild(back);
}

// Display information on clicked breed
function showBreed(event){
  // Jquery
  $(document).ready(function(){
      // Hide breed list
      $(".breedList").hide();
      $("#pageInformation").hide();

    // Loop Through dog breed and find a breed that matches the clicked breed
    for (i = 0; i < dogBreedArray.length; i++) {
      if (event.target.id == (dogBreedArray[i])){
        // Show single breed view
        document.querySelector("#singleBreedView").removeAttribute("style");

        // Create Image of the dog breed
        breedImage();
        // create back link
        goBack('breeds.html', "Back to Breed List");

        // Display dog name, description and characteristics
        breedName.textContent = (dogBreeds[dogBreedArray[i]].breed);
        breedDescription.textContent = (dogBreeds[dogBreedArray[i]].description);
        breedCharacteristics.textContent = (dogBreeds[dogBreedArray[i]].characteristics);
        breedType.textContent = (dogBreeds[dogBreedArray[i]].type);
        breedSize.textContent = (dogBreeds[dogBreedArray[i]].size);

        // Check if the dog breed is hypoallergenic or rare and display the results
        var rarity = dogBreeds[dogBreedArray[i]].rarity;
        rarityCheck('breedRarity', rarity);
        var hypoallergenic = dogBreeds[dogBreedArray[i]].hypoallergenic;
        hypoallergenicCheck('breedHypoallergenic', hypoallergenic);

        // Display information about the friendliness of the dog breed
        breedFriendliness.textContent = (dogBreeds[dogBreedArray[i]].friendliness);

        // Create Star ratings for breed friendliness
        var friendlinessWithFamily = dogBreeds[dogBreedArray[i]].friendliness_with_family;
        starBuilder('breedFamilyFriendliness', friendlinessWithFamily );
        var goodWithChildren = dogBreeds[dogBreedArray[i]].good_with_children;
        starBuilder('breedChildrenFriendliness', goodWithChildren);
        var friendlinessWithStrangers = dogBreeds[dogBreedArray[i]].friendliness_with_strangers;
        starBuilder('breedStrangerFriendliness', friendlinessWithStrangers);
        var friendlinessWithDogs = dogBreeds[dogBreedArray[i]].friendliness_with_dogs;
        starBuilder('breedDogFriendliness', friendlinessWithDogs);

        // Display information about the lifestyle of the dog breed
        breedLifestyle.textContent = (dogBreeds[dogBreedArray[i]].lifestyle);

        // Create Star ratings for breed lifestyle
        var energy = dogBreeds[dogBreedArray[i]].energy;
        starBuilder('breedEnergy', energy);
        var apartmentAdaptability = dogBreeds[dogBreedArray[i]].apartment_adaptability;
        starBuilder('breedAdaptability', apartmentAdaptability);
        var independence = dogBreeds[dogBreedArray[i]].independence;
        starBuilder('breedIndependence', independence);
        var grooming = dogBreeds[dogBreedArray[i]].grooming;
        starBuilder('breedGrooming', independence);

        // Display information about the trainability of the dog breed
        breedTrainability.textContent = (dogBreeds[dogBreedArray[i]].trainability);

        // Create Star ratings for breed intelligence
        var intelligence = dogBreeds[dogBreedArray[i]].intelligence;
        starBuilder('breedIntelligence', intelligence);
        var noisiness = dogBreeds[dogBreedArray[i]].noisiness;
        starBuilder('breedNoisiness', noisiness);
        var preyDrive = dogBreeds[dogBreedArray[i]].prey_drive;
        starBuilder('breedPreyDrive', preyDrive);
        var wanderlust = dogBreeds[dogBreedArray[i]].wanderlust;
        starBuilder('breedWanderlust', wanderlust);

        // Display information about the health of the dog breed
        breedHealth.textContent = (dogBreeds[dogBreedArray[i]].common_health_issues);
        breedWeight.textContent = (dogBreeds[dogBreedArray[i]].weight);
        breedHeight.textContent = (dogBreeds[dogBreedArray[i]].height);
        breedCoatLength.textContent = (dogBreeds[dogBreedArray[i]].coat_length);
        breedLifespan.textContent = (dogBreeds[dogBreedArray[i]].lifespan);
      }
    }
    // Scroll to the top of the page
    $('html,body').scrollTop(0);
  });
}

// Creates and displays 5 star ratings
function starBuilder(id, rating) {
  var i = 0;
  // reset when different dog breed is clicked
  document.querySelector("#" + id).innerHTML = "";
  p = document.querySelector("#" + id);
  while (i < 5) {
    while (i < rating) {
      var starImg = document.createElement("i");
      starImg.className = "fa fa-star";
      p.appendChild(starImg)
      i++;
    };
    if(rating != 5){
    var starImg = document.createElement("i");
    starImg.className = "fa fa-star-o";
    p.appendChild(starImg)
    i++;
    }
  }
}



// Checks if a breed is rare and then prints rare or not rare
function rarityCheck(id, boolean) {
  if (boolean == false) {
    breedRarity.textContent = "Not Rare";
  }else {
    breedRarity.textContent = "Rare";
  }
}

// Checks if a breed is hypoallergenic and then prints hypoallergenicor not hypoallergenic
function hypoallergenicCheck(id, boolean) {
  if (boolean == false) {
    breedHypoallergenic.textContent = "Not Hypoallergenic";
  }else {
    breedHypoallergenic.textContent = "Hypoallergenic";
  }
}
