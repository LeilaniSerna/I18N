import { Component } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonSelect, 
  IonSelectOption, 
  IonCard, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle, 
  IonCardContent, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonButton,
  IonFooter
} from '@ionic/angular/standalone';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonSelect, 
    IonSelectOption, 
    IonCard, 
    IonCardHeader, 
    IonCardSubtitle, 
    IonCardTitle, 
    IonCardContent, 
    IonList, 
    IonItem, 
    IonLabel, 
    IonButton,
    IonFooter,
    TranslatePipe
  ],
})
export class HomePage {
  // Array of keys for rendering features via @for to demonstrate Angular 17/18 control flow
  features: string[] = [
    'HOME.FEATURE_JSON',
    'HOME.FEATURE_STANDALONE',
    'HOME.FEATURE_FLOW',
    'HOME.FEATURE_DYNAMIC'
  ];

  // Language list for the switcher dropdown
  availableLanguages = [
    { code: 'es', label: 'LANGUAGES.ES' },
    { code: 'en', label: 'LANGUAGES.EN' }
  ];

  currentLang: string;
  showExtraInfo = false;

  constructor(private translate: TranslateService) {
    // Determine initial language or default to Spanish
    this.currentLang = this.translate.currentLang() || 'es';
    this.translate.use(this.currentLang);
  }

  // Method to handle language switching via ion-select change
  changeLanguage(event: CustomEvent) {
    const selectedLang = event.detail.value;
    if (selectedLang) {
      this.currentLang = selectedLang;
      this.translate.use(selectedLang);
    }
  }

  // Toggle dynamic block to demonstrate @if control flow
  toggleExtraInfo() {
    this.showExtraInfo = !this.showExtraInfo;
  }
}
