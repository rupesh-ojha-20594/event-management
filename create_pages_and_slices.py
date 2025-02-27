#!/usr/bin/env python3
import os
import sys
import re

# Helper: Convert a file or segment name (e.g. "custom-functions-edit")
# into a valid PascalCase component/slice name (e.g., "CustomFunctionsEdit").
def to_component_name(name):
    parts = re.split(r'[-_]', name)
    return ''.join(part.capitalize() for part in parts if part)

# Generate contents for a page (.tsx) file.
def generate_page_content(component_name, route):
    return f"""import React from 'react';

export default function {component_name}() {{
  return (
    <div>
      <h1>Page for route: {route}</h1>
    </div>
  );
}}
"""

# Generate contents for a slice (.slice.ts) file.
def generate_slice_content(slice_name):
    return f"""import {{ createSlice }} from '@reduxjs/toolkit';

const {slice_name}Slice = createSlice({{
  name: '{slice_name}',
  initialState: {{}},
  reducers: {{
    // add your reducers here
  }},
}});

export default {slice_name}Slice.reducer;
export const {{}} = {slice_name}Slice.actions;
"""

# Only create a file if it does not already exist.
def create_file_if_not_exists(file_path, content):
    if os.path.exists(file_path):
        print("Skipping existing file:", file_path)
    else:
        with open(file_path, "w") as f:
            f.write(content)
        print("Created file:", file_path)

def main(routes_file):
    # Define output directories relative to the current working directory.
    pages_dir = os.path.join(os.getcwd(), "pages")
    slices_dir = os.path.join(os.getcwd(), "slices")
    
    # Ensure the base directories exist.
    os.makedirs(pages_dir, exist_ok=True)
    os.makedirs(slices_dir, exist_ok=True)
    
    # Read the routes from the file.
    with open(routes_file, "r") as f:
        lines = f.read().splitlines()
    
    # Filter out empty lines and any comments.
    routes = [line.strip() for line in lines if line.strip() and not line.strip().startswith("#")]
    
    for route in routes:
        # Split the route into segments (ignoring the initial empty segment).
        segments = [seg for seg in route.split("/") if seg]
        # Skip dynamic segments (starting with ":") when forming directory structure.
        static_segments = [seg for seg in segments if not seg.startswith(":")]
        
        # If no static segments, use 'index'
        file_name = static_segments[-1] if static_segments else "index"
        
        # For the pages folder, build the nested directory structure (if any) using all but the final segment.
        if len(static_segments) > 1:
            page_subdir = os.path.join(pages_dir, *static_segments[:-1])
        else:
            page_subdir = pages_dir
        os.makedirs(page_subdir, exist_ok=True)
        page_file_path = os.path.join(page_subdir, f"{file_name}.tsx")
        
        component_name = to_component_name(file_name)
        page_content = generate_page_content(component_name, route)
        create_file_if_not_exists(page_file_path, page_content)
        
        # Mirror the same nested structure for slices.
        if len(static_segments) > 1:
            slice_subdir = os.path.join(slices_dir, *static_segments[:-1])
        else:
            slice_subdir = slices_dir
        os.makedirs(slice_subdir, exist_ok=True)
        slice_file_path = os.path.join(slice_subdir, f"{file_name}.slice.ts")
        
        slice_content = generate_slice_content(component_name)
        create_file_if_not_exists(slice_file_path, slice_content)

if __name__ == "__main__":
    if len(sys.argv) > 1:
        routes_file = sys.argv[1]
    else:
        routes_file = "routes.txt"
    main(routes_file) 