/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from "@angular/core";

import { PostService } from "../services/post.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-post-dashboard",
  templateUrl: "./post-dashboard.component.html",
  styleUrls: ["./post-dashboard.component.scss"],
  providers: [PostService],
})
export class PostDashboardComponent {
  comentarios: string;
  image: string;
  nombre: string;
  dni: string;
  sexo: string;
  nacionalidad : string;
  edad: string;
  buttonText = "Guardar";

  constructor(private postService: PostService, private router: Router) {}

  createPost(): void {
    const postData = {
      comentarios: this.comentarios,
      image: this.image,
      published: new Date(),
      nombre: this.nombre,
      dni: this.dni,
      sexo: this.sexo,
      nacionalidad: this.nacionalidad,
      edad: this.edad
    };
    this.postService.create(postData);
    this.nombre = "";
    this.dni = "";
    this.sexo = "";
    this.comentarios = "";
    this.buttonText = "Post Created";
    this.image = "";
    this.nacionalidad = "";
    this.edad = "";
    setTimeout(() => (this.buttonText = "Create Post"), 3000);
    this.returnToList();
  }

  returnToList() {
    this.router.navigate(["/"]);
  }
}
