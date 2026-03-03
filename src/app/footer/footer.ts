import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: './footer.html',
    styleUrls: ['./footer.css', './footer.media.css'],
    imports: [RouterLink]
})

export class FooterComponent {}