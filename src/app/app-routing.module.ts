import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignInComponent } from "./sign-in/sign-in.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { TodosComponent } from "./todos/todos.component";
import { TodosResolver } from "./todos.resolver";
import { CanActivateTodosGuard } from "./can-activate-todos.guard";

const routes: Routes = [
	{
		path: '',
		redirectTo: 'sign-in',
		pathMatch: 'full'
	},
	{
		path: 'sign-in',
		component: SignInComponent
	},
	{
		path: 'todos',
		component: TodosComponent,
		canActivate: [CanActivateTodosGuard],
		data: {
			title: 'Example of static route data'
		},
		resolve: {
			todos: TodosResolver
		}
	},
	{
		path: '**',
		component: PageNotFoundComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [CanActivateTodosGuard, TodosResolver]
})
export class AppRoutingModule {

}