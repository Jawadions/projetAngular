import {Component, Input, OnInit} from '@angular/core';
import {Livre} from '../model/livre';
import {LivreService} from '../shared/livre.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
  listLivre: Livre[];
  form: FormGroup;
  image2: string;
  livre: Livre;
  val: string;
  p = 1;
  constructor(private service: LivreService, private fb: FormBuilder, private  router: ActivatedRoute) {
    this.form = this.fb.group({
      id: [null, [Validators.required]],
      nom: [null, [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]+$')]],
      description: [null, [Validators.required, Validators.maxLength(500)]],
      quantity: [null, [Validators.required]],
      prix: [null, [Validators.required]],
      image: [null, [Validators.required]],
      imageFile: new FormControl('', [Validators.required])




    });

}

  ngOnInit(): void {
    this.service.getLivres().subscribe(
      (data: Livre[]) => this.listLivre = data
    );

    this.livre = new Livre();
    this.val = 'Ajouter';
    console.log(this.listLivre);
  }
  ImageChange(event) {

    const reader = new FileReader();



    if ( event.target.files && event.target.files.length) {

      const [image] = event.target.files;

      reader.readAsDataURL(image);



      reader.onload = () => {



        this.image2 = reader.result as string;



        this.form.patchValue({

          imageFile: reader.result

        });



      };



    }

  }
  deleteE(id) {
    this.service.deleteLivre(id).subscribe(
      () => this.listLivre = this.listLivre.filter(livre => livre.id !== id)
    );

  }
  save(form) {
      this.service.addLivre(form).subscribe(
        () => this.listLivre = [form, ...this.listLivre]
      );
  }
  update(id){
    this.livre.id = id;
    this.val = 'Modifier';

  }
  get id() {
    return this.form.get('id');
  }
  get nom() {
    return this.form.get('nom');
  }
  get description() {
    return this.form.get('description');
  }
  get prix() {
    return this.form.get('prix');
  }
  get quantity() {
    return this.form.get('quantity');
  }
}
