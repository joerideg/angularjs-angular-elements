import 'elements/dist/runtime';
import 'elements/dist/polyfills';
import 'elements/dist/main';
import angular from "angular";
import ngSanitize from "angular-sanitize";

import { appRootComponent } from "./components/app-root.component";

angular.module("ngApp", [ngSanitize]).component("appRoot", appRootComponent);
