import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adresse } from 'src/app/models/adresse/adresse.model';
import { Projet } from 'src/app/models/projet/projet.model';
import { ProjetService } from 'src/app/shared/services/projet.service';

@Component({
  selector: 'app-nouveauprojet',
  templateUrl: './nouveauprojet.component.html',
  styleUrls: ['./nouveauprojet.component.scss']
})
export class NouveauprojetComponent implements OnInit {
  projet: Projet;
  adresse : Adresse;
  private projectInserted: boolean=false;


  constructor(private router: Router,
    private projetService: ProjetService ) { }

  ngOnInit(): void {     this.projet = new Projet(null,'','','',new Date(),'',false,0,0,0,0);

  }


  saveProject() {

    //!**************Ajout d'Adresse**************!//
   /* this.adresseService.addAdresse(this.adresse)
    .subscribe (
    data => {
      this.adresse=data;
      console.log("adresse inserted")*/
         //!********** Ajout de projet**************!//
          this.projet.typeProjets="http://localhost:3000/typesProjet/"+this.projet.typeProjets;
          this.projet.adresse="http://localhost:3000/adresse/"+this.adresse.id;
          this.projetService.addProjet(this.projet)
            .subscribe (
              data => {
                console.log("projet inserée")
                  this.projectInserted=true;
                  this.projet=data;

                //!********** Ajout de Contribution**************!//

               /* this.contibution.personne="http://localhost:8082/personnes/"+this.person.id;
                this.contibution.projet="http://localhost:8082/projects/"+this.project.id;
                this.contribService.addContrib(this.getContribution(this.contibution.personne,this.contibution.projet))
                  .subscribe(
                    data => {
                       this.showToaster();
                      }
                    )*/
              }
            )
       }
    
}


