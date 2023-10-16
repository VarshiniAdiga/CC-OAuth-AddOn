/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import { ProgressCircle } from "@swc-react/progress-circle";
import React from "react";
import "./Loading.css";

/**
 * React component for displaying a loading animation.
 */
const Loading = ({ text }) => {
    return (
        <div className="loading-container">
            <ProgressCircle label={text} size="l" indeterminate />
            <div style={{ margin: "1.5em" }}>{text}</div>
        </div>
    );
};

export default Loading;
