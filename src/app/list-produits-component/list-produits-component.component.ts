import { Component, OnInit } from '@angular/core';
import { Produit } from '../Models/Produit';


@Component({
  selector: 'app-list-produits-component',
  templateUrl: './list-produits-component.component.html',
  styleUrls: ['./list-produits-component.component.css']
})
export class ListProduitsComponentComponent implements OnInit {

  listProduits : Produit[] = [{idProduit:1,code:"P147852P",libelle:"Produit1", prixUnitaire:12.5, tauxTVA:0.02},
  {idProduit:2,code:"P147552P",libelle:"Produit1", prixUnitaire:30, tauxTVA:0.1980},
  {idProduit:3,code:"D14785CC",libelle:"Produit1", prixUnitaire:20, tauxTVA:0.1980},
  {idProduit:4,code:"E147852P",libelle:"Produit1", prixUnitaire:50, tauxTVA:0.1980},
  {idProduit:5,code:"F147852P",libelle:"Produit1", prixUnitaire:70, tauxTVA:0.02},];

  message: string = "";
  myInput :number;

  constructor() { 
    }

  ngOnInit(): void { 

    console.log(this.myInput);
  } 



VerifTva(Tva:number):boolean { if (Tva==0.02) return true ; 
else return false ; }


updateTVA(tva:number)
{ tva=0.02 ; 
  this.message = 'TVA modifié'
}

TextColor (p:number) { if(p<=50) return "blue" }
TextStyle (p:number) { if(p<=50) return "italic"}
TaillePolice (p:number) { if(p<=50) return "20px" }
    }
