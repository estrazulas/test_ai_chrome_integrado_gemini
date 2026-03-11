import { AIService } from './services/aiService.js';
import { TranslationService } from './services/translationService.js';
import { View } from './views/view.js';
import { FormController } from './controllers/formController.js';

const translationService = new TranslationService();

const initButton = document.getElementById("init-ai-btn");

initButton.addEventListener("click", async () => {

    try {
        console.log("Inicializando IA...");

        await translationService.initialize();

        console.log("IA pronta!");

        initButton.textContent = "✅ IA pronta";
        initButton.disabled = true;

    } catch (error) {
        console.error("Erro ao inicializar IA:", error);
    }

});

(async function main() {
    // Initialize services and view
    const aiService = new AIService();
    const translationService = new TranslationService();
    const view = new View();
    
    // Set current year
    view.setYear();

    // Check requirements
    const errors = await aiService.checkRequirements();
    if (errors) {
        view.showError(errors);
        return;
    }

    // Initialize translation services
    try {
        await translationService.initialize();
    } catch (error) {
        console.error('Error initializing translation:', error);
        view.showError([error.message]);
        return;
    }

    // Get and initialize AI parameters
    const params = await aiService.getParams();
    view.initializeParameters(params);

    // Initialize controller and setup event listeners
    const controller = new FormController(aiService, translationService, view);
    controller.setupEventListeners();

    console.log('Application initialized successfully');
})();
