import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {

  @ViewChild('fileInput', { static: false }) fileInput: ElementRef | undefined;

  avatarUrl: string = 'https://media.licdn.com/dms/image/v2/D4D03AQHnCQ2pjeCz5g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711788860078?e=1729728000&v=beta&t=OtqPTMvry242g8CY7vUlXgyrclD0t8Y1xn6BP7GPBYs';
  name: string = "Mustafa Dağlılar";
  jobTitle: string = "Full Stack Developer";
  email: string = "mustafa.com";
  phone: string = "+90 555 555 5555";
  address: string = "İzmir, Türkiye";

  constructor(private router: Router) { }

  ngOnInit() {
  }



  selectAvatar() {
    if (this.fileInput) {
      this.fileInput.nativeElement.click();
    }
  }

  goMyProfile() {
    this.router.navigate(['/my-account']);
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.avatarUrl = reader.result as string;
        // Burada base64 formatında tutabilirsiniz
        const base64String = (reader.result as string).split(',')[1];
        //console.log('Base64 Image String:', base64String);
      };
      reader.readAsDataURL(file);
    }
  }


  updateProfile() {
    // Profil güncelleme işlemleri burada yapılır.
    console.log('Profile updated:', {
      name: this.name,
      jobTitle: this.jobTitle,
      email: this.email,
      phone: this.phone,
      address: this.address,
      base64Url: this.avatarUrl
    });
  }

}
