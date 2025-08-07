const catData = {
  siamese: {
    title: "Siamese",
    description: "Siamese cats are known for their sleek bodies, blue eyes, and vocal personalities.The Siamese cat is one of the first distinctly recognised breeds of Asian cat.",
    image: "images/siamese1.jpg"
  },
  persian: {
    title: "Persian",
    description: "Persian cats have long, luxurious fur and are known for their calm temperament.",
    image: "images/persian.jpg"
  },
  mainecoon: {
    title: "Maine Coon",
    description: "One of the largest domestic breeds, Maine Coons are fluffy, friendly, and intelligent. They’re known as 'gentle giants.'",
    image: "images/mainecoon1.jpg"
  },
  bengal: {
    title: "Bengal",
    description: "Bengals have a wild appearance with rosette markings, resembling leopards. They're energetic, playful, and love water.",
    image: "images/bengal.jpg"
  },
  ragdoll: {
    title: "Ragdoll",
    description: "Ragdolls are large, blue-eyed cats that go limp when picked up. They’re affectionate, gentle, and great with families.",
    image: "images/ragdoll.jpg"
  },
  britishshorthair: {
    title: "British Shorthair",
    description: "Known for their round faces and plush coats, British Shorthairs are calm, independent, and affectionate companions.",
    image: "images/british_short.jpg"
  },
  sphynx: {
    title: "Sphynx",
    description: "The Sphynx is a hairless breed with wrinkled skin and large ears. Despite their looks, they’re warm, friendly, and attention-seeking.",
    image: "images/sphynx.jpg"
  },
  abyssinian: {
    title: "Abyssinian",
    description: "Active and curious, Abyssinians are sleek cats with ticked coats. They love to climb and explore.",
    image: "images/abyssinian.jpg"
  },
  scottishfold: {
    title: "Scottish Fold",
    description: "Famous for their folded ears, Scottish Folds are sweet, adaptable, and enjoy quiet time with their owners.",
    image: "images/Scottishfold.jpg"
  },
  birman: {
    title: "Birman",
    description: "Birmans are long-haired cats with blue eyes and white “gloves” on their paws. They're gentle, loyal, and affectionate.",
    image: "images/birman.jpg"
  },
  norwegianforest: {
    title: "Norwegian Forest Cat",
    description: "With a thick, water-resistant coat and bushy tail, Norwegian Forest Cats are strong, independent, and love the outdoors.",
    image: "images/norwegianforest.jpg"
  },
  orientalshorthair: {
    title: "Oriental Shorthair",
    description: "A close relative of the Siamese, Oriental Shorthairs come in many colors and are known for their large ears and playful, vocal personality.",
    image: "images/orientalshorthair.jpg"
  },
  turkishangora: {
    title: "Turkish Angora",
    description: "Elegant and graceful, Turkish Angoras have silky fur and a lively, intelligent temperament. Often pure white, they’re agile and affectionate.",
    image: "images/turkishangora.jpg"
  },
  russianblue: {
    title: "Russian Blue",
    description: "Known for their plush silvery-blue coat and emerald eyes, Russian Blues are quiet, shy, and extremely loyal to their humans.",
    image: "images/russianblue.jpg"
  },
  devonrex: {
    title: "Devon Rex",
    description: "The Devon Rex has large ears, curly coat, and a mischievous personality. They’re playful, active, and love attention.",
    image: "images/devonrex.jpg"
  },
  tonkinese: {
    title: "Tonkinese",
    description: "A mix between Siamese and Burmese, Tonkinese cats are outgoing, intelligent, and social with a sleek, muscular build.",
    image: "images/tonkinese.jpg"
  },
  chartreux: {
    title: "Chartreux",
    description: "This French breed has a muscular build, woolly blue-gray fur, and golden eyes. They’re quiet, sweet-natured, and observant.",
    image: "images/chartreux.jpg"
  },
  manx: {
    title: "Manx",
    description: "Manx cats are known for their tailless or short-tailed appearance. They’re strong, loyal, and often enjoy water.",
    image: "images/manx.jpg"
  },
  savannah: {
    title: "Savannah",
    description: "A cross between a domestic cat and a serval, Savannah cats are exotic-looking, energetic, and need lots of stimulation.",
    image: "images/savannah.jpg"
  },
  balinese: {
    title: "Balinese",
    description: "Essentially a long-haired Siamese, Balinese cats are elegant, talkative, and affectionate with silky coats and graceful movement.",
    image: "images/balinese.jpg"
  }

  // Add more cat objects here
};

function openModal(catId) {
  const modal = document.getElementById("modal");
  const data = catData[catId];
  document.getElementById("modal-img").src = data.image;
  document.getElementById("modal-title").innerText = data.title;
  document.getElementById("modal-description").innerText = data.description;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

