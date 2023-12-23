function getBotResponse(input) {
    if (input == "hello"|| input=="hello!") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if(input=="Panchakarma"|input=="panchakarma"){
        return panchakarma;
    } else if(input=='How to treat ulcers'| input=="ulcer"){
        return ulcers;
    } else if(input=="Cancer"){
        return cancer;
    } else if(input=="Give me information and recent research papers on Ayurvedic treatments for type 2 diabetes"){
        return diab;
    }
    else {
        return "Try asking something else!";
    }
}

const panchakarma ='Panchakarma is a traditional Ayurvedic cleansing and rejuvenation therapy that consists of two words: "Pancha" and "Karma." \ Lets break down these words to understand the meaning of Panchakarma part by part: <br><br> "Pancha":<br> "Pancha" means "five" in Sanskrit,\
which is one of the ancient languages of India. In the context of Panchakarma, it refers to the five primary therapeutic procedures or actions involved \
in this Ayurvedic therapy. \ <br><br> "Karma":<br> "Karma" means "action" or "treatment" in Sanskrit. In the context of Panchakarma, it refers to the series \
of therapeutic actions or procedures that are performed to detoxify, purify, and rejuvenate the body. <br> So, when you put these two parts together, \
"Panchakarma" essentially means "the five actions" or "the five treatments." These five treatments are integral to this Ayurvedic therapy and are designed\
to balance and harmonize the body, mind, and spirit. <br><br> Now, let\'s briefly describe the five primary procedures of Panchakarma:\
<ul><li>Vamana (Emesis): This is the therapeutic vomiting procedure aimed at eliminating excess mucus and toxins from the upper respiratory and digestive tract.</li>\
<li>Virechana (Purgation): Virechana involves the controlled use of laxatives to induce bowel movements and eliminate accumulated toxins from the lower digestive tract.</li>\
<li>Basti (Enema): Basti therapy involves the introduction of herbal oils or decoctions into the rectum to cleanse the colon and balance Vata dosha.</li>\
<li>Nasya (Nasal Administration): Nasya treatment involves the application of herbal oils or medicated substances into the nasal passages to purify \
and rejuvenate the head and neck region. \
<li>Rakta Mokshana (Bloodletting): Rakta Mokshana is a less commonly used procedure today, but it involves controlled\
removal of a small amount of blood to eliminate impurities from the bloodstream.</li></ul>\
<br><br>Panchakarma is a holistic approach to health and well-being that aims to\
remove accumulated toxins and restore the body\'s natural balance. It is typically carried out under the guidance of trained Ayurvedic practitioners and \
is a personalized therapy, with the specific treatments chosen based on an individual\'s constitution and imbalances.\
<br><br>Panchakarma is often used to address various health issues, promote longevity, and enhance overall wellness according to Ayurvedic principles.'

const ulcers = 'In Ayurvedic terminology, ulcers are often referred to as "Vrana" or "Vrana Roga." Here are Ayurvedic formulations and remedies to manage and heal Vrana or ulcers:\
<ul><li>Aloe Vera Gel (Kumari): Kumari has a cooling and healing effect on Vrana. It can be consumed as aloe vera gel mixed with water or \
applied topically to the affected area. </li><li>Licorice (Yashtimadhu) Powder: Yashtimadhu is a Vrana Roga healer. You can mix Yashtimadhu \
powder with honey or use it in a decoction form to promote healing.</li><li>Triphala: Triphala, with its Tridosha balancing properties, can help in detoxification and wound healing.\ It is useful in managing Vrana Roga.</li><li>Coconut Water (Nariyal Jala): Nariyal Jala is a cooling and soothing drink that can alleviate Vrana discomfort by reducing inflammation\
and acidity. </li><li>Ghee (Ghrita): Ghrita has healing properties and can be consumed with warm milk or rice to soothe the digestive\
tract and promote Vrana healing.</li><li>Coriander Seeds (Dhanyaka): Dhanyaka boiled in water and consumed as a liquid can help reduce \
inflammation and relieve Vrana discomfort.</li><li>Cold Milk (Sheeta Ksheera): Sheeta Ksheera is cooling and can provide relief from the \
burning sensation associated with Vrana.</li><li>Herbal Ayurvedic Medicines: Ayurvedic formulations such as Kamadudha Rasa, Shankha Bhasma, \
or Avipattikar Churna are recommended by Ayurvedic practitioners for managing Vrana.</li><li>Dietary Recommendations (Ahara Vidhi): Following \
a diet that is easy to digest and includes foods like rice, oats, boiled vegetables, and herbal teas is important for managing Vrana.\
Avoid spicy, fried, and acidic foods.</li><li>Lifestyle Practices (Vyavayama): Reducing stress and maintaining a regular daily routine (dinacharya)\
are vital for holistic well-being and Vrana healing.</li></ul>'

const cancer='Here are some research papers related to cancer:\ <br><br>An assessment of the ayurvedic concept of cancer and a new paradigm\
 of anticancer treatment in Ayurveda<br>\
 <a href="https://www.researchgate.net/profile/Harsh-Singh-11/publication/11002154_An_Assessment_of_the_Ayurvedic_Concept_of_Cancer_and_a_New_Paradigm_of_Anticancer_Treatment_in_Ayurveda/links/6170e0eb435dab3b758a2302/An-Assessment-of-the-Ayurvedic-Concept-of-Cancer-and-a-New-Paradigm-of-Anticancer-Treatment-in-Ayurveda.pdf" target="_blank">(Link to the paper)</a>\
 <br><br>Ayurvedic concept of Shatkriyakala: a traditional knowledge of cancer pathogenesis and therapy<br><a href="https://www.researchgate.net/profile/Deepak-Semwal/publication/315476812_Ayurvedic_concept_of_Shatkriyakala_a_traditional_knowledge_of_cancer_pathogenesis_and_therapy/links/59d6218ea6fdcc874698d08b/Ayurvedic-concept-of-Shatkriyakala-a-traditional-knowledge-of-cancer-pathogenesis-and-therapy.pdf" target="_blank">(Link to the paper)</a>\
 <br><br>Traditional ayurvedic medicines: pathway to develop anti-cancer drugs<br><a href="https://pdfs.semanticscholar.org/778f/7e73b0a23832faac4b4115844c5dc0303f1c.pdf" target="_blank">(Link to the paper)</a>'

const diab = 'Ayurveda, the ancient Indian system of medicine, has long emphasized a holistic approach to managing type 2 diabetes. Herbal formulations like bitter melon, fenugreek, and turmeric, alongside lifestyle interventions including dietary modifications and yoga, are often recommended in Ayurvedic practice. Recent research has underscored the potential of Ayurvedic treatments in enhancing insulin sensitivity, lowering blood glucose levels, \
and mitigating diabetic complications.\
<br><br> Here are the links to few research papers on this: \
<ul><li>Ayurvedic treatments for diabetes mellitus<br><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3718571/" target="_blank">(Link to paper)</a></li>\
<li>Effectiveness of polyherbal formulations for the treatment of type 2 Diabetes mellitus-A systematic review and meta-analysis<br><a href="https://www.sciencedirect.com/science/article/pii/S0975947620301054" target="_blank">(Link to paper)</a></li></ul>'