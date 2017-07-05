import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    CreateEventComponent,
    EventRouteActivator,
    EventsListResolver,
    EventDetailsComponent
} from './events/index';
import { NavBarComponent } from './nav/navbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrService } from "./common/toastr.service";
import { appRoutes } from "./routes";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./errors/404.component";
import { EventsAppComponent } from "./events-app.component";

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [
        EventsAppComponent, 
        EventsListComponent, 
        EventThumbnailComponent, 
        NavBarComponent, 
        EventDetailsComponent, 
        CreateEventComponent,
        Error404Component
    ],
    providers: [
        EventService, 
        ToastrService, 
        EventRouteActivator,
        EventsListResolver,
        {
            provide: 'canDeactivateCreateEvent', 
            useValue: checkDirtyState 
        }
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {}

function checkDirtyState(component:CreateEventComponent) {
    if(component.isDirty) {
        return window.confirm('You have not saved this event, do you really want to cancel?');
    }
    return true;
}