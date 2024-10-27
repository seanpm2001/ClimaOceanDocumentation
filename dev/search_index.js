var documenterSearchIndex = {"docs":
[{"location":"library/function_index/#main-index","page":"Function index","title":"Index","text":"","category":"section"},{"location":"library/function_index/","page":"Function index","title":"Function index","text":"Pages = [\"public.md\", \"internals.md\", \"function_index.md\"]","category":"page"},{"location":"library/outline/#Library-Outline","page":"Contents","title":"Library Outline","text":"","category":"section"},{"location":"library/outline/","page":"Contents","title":"Contents","text":"Pages = [\"public.md\", \"internals.md\", \"function_index.md\"]","category":"page"},{"location":"library/internals/#Private-types-and-functions","page":"Private","title":"Private types and functions","text":"","category":"section"},{"location":"library/internals/","page":"Private","title":"Private","text":"Documentation for ClimaOcean.jl's internal interface.","category":"page"},{"location":"library/internals/#ClimaOcean","page":"Private","title":"ClimaOcean","text":"","category":"section"},{"location":"library/internals/","page":"Private","title":"Private","text":"Modules = [ClimaOcean]\nPublic = false","category":"page"},{"location":"library/internals/#Diagnostics","page":"Private","title":"Diagnostics","text":"","category":"section"},{"location":"library/internals/","page":"Private","title":"Private","text":"Modules = [ClimaOcean.Diagnostics]\nPublic = false","category":"page"},{"location":"library/internals/#InitialConditions","page":"Private","title":"InitialConditions","text":"","category":"section"},{"location":"library/internals/","page":"Private","title":"Private","text":"Modules = [ClimaOcean.InitialConditions]\nPublic = false","category":"page"},{"location":"library/internals/#DataWrangling","page":"Private","title":"DataWrangling","text":"","category":"section"},{"location":"library/internals/","page":"Private","title":"Private","text":"Modules = [ClimaOcean.DataWrangling]\nPublic = false","category":"page"},{"location":"library/internals/#ClimaOcean.DataWrangling.continue_downwards!-Tuple{Any, Any}","page":"Private","title":"ClimaOcean.DataWrangling.continue_downwards!","text":"continue_downwards!(field, mask)\n\nContinue downwards a field with missing values within mask. Cells where mask[i, k, k] == false will be preserved.\n\n\n\n\n\n","category":"method"},{"location":"library/internals/#ClimaOcean.DataWrangling.download_progress-Tuple{Any, Any}","page":"Private","title":"ClimaOcean.DataWrangling.download_progress","text":"download_progress(total, now; filename=\"\")\n\n\n\n\n\n","category":"method"},{"location":"library/internals/#ClimaOcean.DataWrangling.inpaint_mask!-Tuple{Any, Any}","page":"Private","title":"ClimaOcean.DataWrangling.inpaint_mask!","text":"inpaint_mask!(field, mask; max_iter = Inf)\n\nInpaint field within mask, using values outside mask. In other words, regions where mask[i, j, k] == 1 will be inpainted and regions where mask[i, j, k] == 0 will be preserved.\n\nArguments\n\n- `field`: `Field` to be inpainted.\n- `mask`: Boolean-valued `Field`, values where\n          `mask[i, j, k] == true` are inpainted.\n- `max_iter`: Maximum iterations for inpainting. Non-Inf values mean that\n              NaN's can occur within the mask.\n\n\n\n\n\n","category":"method"},{"location":"library/internals/#ClimaOcean.DataWrangling.propagate_horizontally!","page":"Private","title":"ClimaOcean.DataWrangling.propagate_horizontally!","text":"propagate_horizontally!(field, mask [, tmp_field=deepcopy(field)]; max_iter = Inf)\n\nHorizontally propagate the values of field into the mask. In other words, cells where mask[i, j, k] == false are preserved, and cells where mask[i, j, k] == true are painted over.\n\n\n\n\n\n","category":"function"},{"location":"library/internals/#ECCO","page":"Private","title":"ECCO","text":"","category":"section"},{"location":"library/internals/","page":"Private","title":"Private","text":"Modules = [ClimaOcean.ECCO]\nPublic = false","category":"page"},{"location":"library/internals/#ClimaOcean.DataWrangling.ECCO.ECCONetCDFBackend-Tuple{Any, Any}","page":"Private","title":"ClimaOcean.DataWrangling.ECCO.ECCONetCDFBackend","text":"ECCONetCDFBackend(length)\n\nRepresents an ECCO FieldTimeSeries backed by ECCO native .nc files. Each time instance is stored in an individual file.\n\n\n\n\n\n","category":"method"},{"location":"library/internals/#ClimaOcean.DataWrangling.ECCO.ECCORestoring","page":"Private","title":"ClimaOcean.DataWrangling.ECCO.ECCORestoring","text":"struct ECCORestoring{FTS, G, M, V, N} <: Function\n\nA struct representing ECCO restoring.\n\nFields\n\nECCO_fts: The ECCO FTS on the native ECCO grid.\nECCO_grid: The native ECCO grid to interpolate from.\nmask: A mask (could be a number, an array, a function or a field).\nvariable_name: The variable name of the variable that needs restoring.\nλ⁻¹: The reciprocal of the restoring timescale.\n\n\n\n\n\n","category":"type"},{"location":"library/internals/#ClimaOcean.DataWrangling.ECCO.ECCO_field_time_series-Tuple{ECCOMetadata}","page":"Private","title":"ClimaOcean.DataWrangling.ECCO.ECCO_field_time_series","text":"ECCO_field_time_series(metadata::ECCOMetadata;\n                       architecture = CPU(),\n                       time_indices_in_memory = 2,\n                       time_indexing = Cyclical(),\n                       grid = nothing)\n\nCreate a field time series object for ECCO data.\n\nArguments:\n\nmetadata: An ECCOMetadata object containing information about the ECCO dataset.\n\nKeyword Arguments:\n\narchitecture: The architecture to use for computations (default: CPU()).\ntimeindicesin_memory: The number of time indices to keep in memory (default: 2).\ntime_indexing: The time indexing scheme to use (default: Cyclical()).\ngrid: if not a nothing, the ECCO data is directly interpolated on the grid,\n\n\n\n\n\n","category":"method"},{"location":"library/internals/#ClimaOcean.DataWrangling.ECCO.ECCO_times-Tuple{Any}","page":"Private","title":"ClimaOcean.DataWrangling.ECCO.ECCO_times","text":"ECCO_times(metadata; start_time = metadata.dates[1])\n\nExtracts the time values from the given metadata and calculates the time difference from the start time.\n\nArguments\n\nmetadata: The metadata containing the date information.\nstart_time: The start time for calculating the time difference. Defaults to the first date in the metadata.\n\nReturns\n\nAn array of time differences in seconds.\n\n\n\n\n\n","category":"method"},{"location":"library/internals/#ClimaOcean.DataWrangling.ECCO.download_dataset!-Tuple{ECCOMetadata}","page":"Private","title":"ClimaOcean.DataWrangling.ECCO.download_dataset!","text":"download_dataset!(metadata::ECCOMetadata; url = urls(metadata))\n\nDownload the dataset specified by ECCOMetadata. If ECCOMetadata.dates is a single date,  the dataset is downloaded directly. If ECCOMetadata.dates is a vector of dates, each date is downloaded individually. The data download requires a username and password to be provided in the ECCOUSERNAME and ECCOPASSWORD environment variables. This can be done by exporting the environment variables in the shell before running the script, or by launching julia with \n\nECCOUSERNAME=myuser ECCOPASSWORD=mypasswrd julia \n\nArguments\n\nmetadata::ECCOMetadata: The metadata specifying the dataset to be downloaded.\n\n\n\n\n\n","category":"method"},{"location":"library/internals/#ClimaOcean.DataWrangling.ECCO.inpainted_ECCO_field-Tuple{ECCOMetadata}","page":"Private","title":"ClimaOcean.DataWrangling.ECCO.inpainted_ECCO_field","text":"inpainted_ECCO_field(variable_name; \n                     architecture = CPU(),\n                     mask = ECCO_mask(architecture),\n                     maxiter = Inf)\n\nRetrieve the ECCO field corresponding to variable_name inpainted to fill all the missing values in the original dataset.\n\nArguments:\n\nvariable_name: the variable name corresponding to the Dataset.\n\nKeyword Arguments:\n\narchitecture: either CPU() or GPU().\nmask: the mask used to inpaint the field (see inpaint_mask!).\nmaxiter: the maximum number of iterations to inpaint the field (see inpaint_mask!).\n\n\n\n\n\n","category":"method"},{"location":"library/internals/#Bathymetry","page":"Private","title":"Bathymetry","text":"","category":"section"},{"location":"library/internals/","page":"Private","title":"Private","text":"Modules = [ClimaOcean.Bathymetry]\nPublic = false","category":"page"},{"location":"library/internals/#ClimaOcean.Bathymetry.remove_minor_basins!-Tuple{Oceananigans.Fields.Field, Any}","page":"Private","title":"ClimaOcean.Bathymetry.remove_minor_basins!","text":"remove_minor_basins!(z_data, keep_major_basins)\n\nRemove independent basins from the bathymetry data stored in z_data by identifying connected regions below sea level. Basins are removed from smallest to largest until only keep_major_basins remain.\n\nArguments\n\nz_data: A 2D array representing the bathymetry data.\nkeep_major_basins: The maximum number of connected regions to keep.                       Default is Inf, which means all connected regions are kept.\n\n\n\n\n\n","category":"method"},{"location":"library/internals/#VerticalGrids","page":"Private","title":"VerticalGrids","text":"","category":"section"},{"location":"library/internals/","page":"Private","title":"Private","text":"Modules = [ClimaOcean.VerticalGrids]\nPrivate = false","category":"page"},{"location":"library/internals/#ClimaOcean.VerticalGrids.stretched_vertical_faces-Tuple{}","page":"Private","title":"ClimaOcean.VerticalGrids.stretched_vertical_faces","text":"stretched_vertical_faces(; surface_layer_Δz = 5.0,\n                           surface_layer_height = 100.0,\n                           constant_bottom_spacing_depth = Inf,\n                           maximum_Δz = Inf,\n                           stretching = PowerLawStretching(1.02),\n                           rounding_digits = 1,\n                           depth = 5000)\n\nReturn an array of cell interfaces with surface_layer_Δz spacing in a surface layer of height surface_layer_height, and stretched according to the function stretching(Δz_above, z_above) down to depth. The interfaces extends from Lz = -z[1] to 0 = z[end], where Lz ≥ depth.\n\nThe grid spacing Δz is limited to be less than maximum_Δz. The grid is also uniformly-spaced below constant_bottom_spacing_depth.\n\nrounding_digits controls the accuracy with which the grid face positions are saved.\n\n\n\n\n\n","category":"method"},{"location":"library/internals/#OceanSeaIceModels","page":"Private","title":"OceanSeaIceModels","text":"","category":"section"},{"location":"library/internals/","page":"Private","title":"Private","text":"Modules = [ClimaOcean.OceanSeaIceModels]\nPrivate = false","category":"page"},{"location":"library/internals/#CrossRealFluxes","page":"Private","title":"CrossRealFluxes","text":"","category":"section"},{"location":"library/internals/","page":"Private","title":"Private","text":"Modules = [ClimaOcean.OceanSeaIceModels.CrossRealmFluxes]\nPrivate = false","category":"page"},{"location":"library/internals/#ClimaOcean.OceanSeaIceModels.CrossRealmFluxes.LatitudeDependentAlbedo","page":"Private","title":"ClimaOcean.OceanSeaIceModels.CrossRealmFluxes.LatitudeDependentAlbedo","text":"LatitudeDependentAlbedo([FT::DataType=Float64]; diffuse = 0.069, direct = 0.011)\n\nConstructs a LatitudeDependentAlbedo object. The albedo of the ocean surface is assumed to be a function of the latitude, obeying the following formula (Large and Yeager, 2009):\n\nα(φ) = α.diffuse - α.direct * cos(2φ)\n\nwhere φ is the latitude, α.diffuse is the diffuse albedo, and α_.irect is the direct albedo.\n\nArguments\n\n===========\n\nFT::DataType: The data type of the albedo values. Default is Float64.\n\nKeyword Arguments\n\n===================\n\ndiffuse: The diffuse albedo value. Default is 0.069.\ndirect: The direct albedo value. Default is 0.011.\n\n\n\n\n\n","category":"type"},{"location":"library/internals/#ClimaOcean.OceanSeaIceModels.CrossRealmFluxes.Radiation","page":"Private","title":"ClimaOcean.OceanSeaIceModels.CrossRealmFluxes.Radiation","text":"Radiation([arch = CPU(), FT=Float64];\n          ocean_emissivity = 0.97,\n          sea_ice_emissivity = 1.0,\n          ocean_albedo = TabulatedAlbedo(arch, FT),\n          sea_ice_albedo = 0.7,\n          stefan_boltzmann_constant = 5.67e-8)\n\nConstructs a Radiation object that represents the radiation properties of the ocean and sea ice.\n\nArguments\n\n===========\n\narch: The architecture of the system (default: CPU()).\nFT: The floating-point type to use (default: Float64).\n\nKeyword Arguments\n\n===================\n\nocean_emissivity: The emissivity of the ocean surface (default: 0.97).\nsea_ice_emissivity: The emissivity of the sea ice surface (default: 1.0).\nocean_albedo: The albedo of the ocean surface (default: LatitudeDependentAlbedo(FT)).\nsea_ice_albedo: The albedo of the sea ice surface (default: 0.7).\nstefan_boltzmann_constant: The Stefan-Boltzmann constant (default: 5.67e-8).\n\n\n\n\n\n","category":"type"},{"location":"library/internals/#ClimaOcean.OceanSeaIceModels.CrossRealmFluxes.SimilarityTheoryTurbulentFluxes","page":"Private","title":"ClimaOcean.OceanSeaIceModels.CrossRealmFluxes.SimilarityTheoryTurbulentFluxes","text":"SimilarityTheoryTurbulentFluxes(FT::DataType = Float64;\n                                gravitational_acceleration = default_gravitational_acceleration,\n                                von_karman_constant = convert(FT, 0.4),\n                                turbulent_prandtl_number = convert(FT, 1),\n                                gustiness_parameter = convert(FT, 6.5),\n                                stability_functions = default_stability_functions(FT),\n                                thermodynamics_parameters = PATP(FT),\n                                water_vapor_saturation = ClasiusClapyeronSaturation(),\n                                water_mole_fraction = convert(FT, 0.98),\n                                roughness_lengths = default_roughness_lengths(FT),\n                                similarity_profile_type = LogarithmicSimilarityProfile(),\n                                bulk_velocity = RelativeVelocity(),\n                                tolerance = 1e-8,\n                                maxiter = 100,\n                                fields = nothing)\n\nSimilarityTheoryTurbulentFluxes contains parameters and settings to calculate sea-air turbulent fluxes using Monin-Obukhov similarity theory.\n\nKeyword Arguments\n\ngravitational_acceleration: The gravitational acceleration (default: defaultgravitationalacceleration).\nvon_karman_constant: The von Karman constant (default: 0.4).\nturbulent_prandtl_number: The turbulent Prandtl number (default: 1).\ngustiness_parameter: The gustiness parameter that accounts for low wind speed areas (default: 6.5).\nstability_functions: The stability functions. Default: defaultstabilityfunctions(FT) that follow the                         formulation of Edson et al (2013).\nthermodynamics_parameters: The thermodynamics parameters used to calculate atmospheric stability and                              saturation pressure. Default: PATP, alias for PrescribedAtmosphereThermodynamicsParameters.\nwater_vapor_saturation: The water vapor saturation law. Default: ClasiusClapyeronSaturation() that follows the                            Clasius Clapyeron pressure formulation.\nwater_mole_fraction: The water mole fraction used to calculate the seawatersaturationspecific_humidity.                         Default: 0.98, the rest is assumed to be other substances such as chlorine, sodium sulfide and magnesium.\nroughness_lengths: The roughness lengths used to calculate the characteristic scales for momentum, temperature and                       water vapor. Default: defaultroughnesslengths(FT), formulation taken from Edson et al (2013).\nsimilarity_profile_type: The type of similarity profile used to relate the atmospheric state to the                             surface fluxes / characteristic scales.\nbulk_velocity: The velocity used to calculate the characteristic scales. Default: RelativeVelocity() (difference between                  atmospheric and oceanic speed).\ntolerance: The tolerance for convergence (default: 1e-8).\nmaxiter: The maximum number of iterations (default: 100).\nfields: The fields to calculate (default: nothing).\n\n\n\n\n\n","category":"type"},{"location":"#ClimaOcean.jl","page":"Home","title":"ClimaOcean.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Ocean component of CliMa's Earth system model.","category":"page"},{"location":"library/public/#Public-Documentation","page":"Public","title":"Public Documentation","text":"","category":"section"},{"location":"library/public/","page":"Public","title":"Public","text":"Documentation for ClimaOcean.jl's public interface.","category":"page"},{"location":"library/public/","page":"Public","title":"Public","text":"See the Internals section of the manual for internal package docs covering all submodules.","category":"page"},{"location":"library/public/#ClimaOcean","page":"Public","title":"ClimaOcean","text":"","category":"section"},{"location":"library/public/","page":"Public","title":"Public","text":"Modules = [ClimaOcean]\nPrivate = false","category":"page"},{"location":"library/public/#Diagnostics","page":"Public","title":"Diagnostics","text":"","category":"section"},{"location":"library/public/","page":"Public","title":"Public","text":"Modules = [ClimaOcean.Diagnostics]\nPrivate = false","category":"page"},{"location":"library/public/#ClimaOcean.Diagnostics.MixedLayerDepthField-Tuple{Any, Any, Any}","page":"Public","title":"ClimaOcean.Diagnostics.MixedLayerDepthField","text":"MixedLayerDepthField(grid, tracers, buoyancy_model; Δb = 3e-4, field_kw...)\n\nReturn a reduced Field{Center, Center, Nothing} that represents mixed layer depth for model, based on a buoyancy differential criterion. The mixed layer depth is defined as the depth h for which\n\nb(z=0) - b(z=-h) = Δb\n\nThis criterion is solved by integrating downwards and linearly interpolating to find h, assuming that b decreases with depth.\n\nKeyword arguments\n\nΔb: Buoyancy differential used to calculate mixed layer depth\nfield_kw: Keyword arguments passed to Field.\n\nExample\n\nh = MixedLayerDepth(model)\ncompute!(h) # compute mixed layer depth\n\n\n\n\n\n","category":"method"},{"location":"library/public/#InitialConditions","page":"Public","title":"InitialConditions","text":"","category":"section"},{"location":"library/public/","page":"Public","title":"Public","text":"Modules = [ClimaOcean.InitialConditions]\nPrivate = false","category":"page"},{"location":"library/public/#DataWrangling","page":"Public","title":"DataWrangling","text":"","category":"section"},{"location":"library/public/","page":"Public","title":"Public","text":"Modules = [ClimaOcean.DataWrangling]\nPrivate = false","category":"page"},{"location":"library/public/#ECCO","page":"Public","title":"ECCO","text":"","category":"section"},{"location":"library/public/","page":"Public","title":"Public","text":"Modules = [ClimaOcean.ECCO]\nPrivate = false","category":"page"},{"location":"library/public/#ClimaOcean.DataWrangling.ECCO.ECCOMetadata","page":"Public","title":"ClimaOcean.DataWrangling.ECCO.ECCOMetadata","text":"ECCOMetadata{D, V}\n\nMetadata holding the ECCO dataset information:\n\nname: The name of the dataset.\ndates: The dates of the dataset, in a AbstractCFDateTime format.\nversion: The version of the dataset, could be ECCO2Monthly, ECCO2Daily, or ECCO4Monthly.\ndir: The directory where the dataset is stored.\n\n\n\n\n\n","category":"type"},{"location":"library/public/#ClimaOcean.DataWrangling.ECCO.ECCOMetadata-Tuple{Symbol}","page":"Public","title":"ClimaOcean.DataWrangling.ECCO.ECCOMetadata","text":"ECCOMetadata(name::Symbol; \n             dates = DateTimeProlepticGregorian(1993, 1, 1), \n             version = ECCO4Monthly(), \n             dir = download_ECCO_cache)\n\nConstructs an ECCOMetadata object with the specified parameters.\n\nArguments\n\n============\n\nname::Symbol: The name of the metadata.\n\nKeyword Arguments\n\n===================\n\ndate: The date of the metadata (default: DateTimeProlepticGregorian(1993, 1, 1)).\nversion: The version of the metadata (for the moment the choices are ECCO2Monthly(), ECCO2Daily(), or ECCO4Monthly()).\ndir: The dir to the datafile (default: downloadECCOcache).\n\n\n\n\n\n","category":"method"},{"location":"library/public/#ClimaOcean.DataWrangling.ECCO.ECCO_field-Tuple{ECCOMetadata}","page":"Public","title":"ClimaOcean.DataWrangling.ECCO.ECCO_field","text":"ECCO_field(variable_name;\n           architecture = CPU(),\n           horizontal_halo = (1, 1),\n           user_data = nothing,\n           url = ecco_urls[variable_name],\n           short_name = ecco_short_names[variable_name])\n\nRetrieve the ECCO field corresponding to variable_name.  The data is either: (1) retrieved from filename, (2) dowloaded from url if filename does not exists, (3) filled from user_data if user_data is provided.\n\n\n\n\n\n","category":"method"},{"location":"library/public/#ClimaOcean.DataWrangling.ECCO.ECCO_mask","page":"Public","title":"ClimaOcean.DataWrangling.ECCO.ECCO_mask","text":"ECCO_mask(architecture = CPU(); minimum_value = Float32(-1e5))\n\nA boolean field where true represents a missing value in the ECCO dataset.\n\n\n\n\n\n","category":"function"},{"location":"library/public/#ClimaOcean.DataWrangling.ECCO.ECCO_restoring_forcing","page":"Public","title":"ClimaOcean.DataWrangling.ECCO.ECCO_restoring_forcing","text":"ECCO_restoring_forcing(metadata::ECCOMetadata;\n                       architecture = CPU(), \n                       backend = ECCONetCDFBackend(2),\n                       time_indexing = Cyclical(),\n                       mask = 1,\n                       timescale = 5days)\n\nCreate a restoring forcing term that restores to values stored in an ECCO field time series.\n\nArguments:\n\n=============\n\nmetadata: The metadata for the ECCO field time series.\n\nKeyword Arguments:\n\n====================\n\narchitecture: The architecture. Typically CPU or GPU\ntime_indices_in_memory: The number of time indices to keep in memory. trade-off between performance                           and memory footprint.    \ntime_indexing: The time indexing scheme for the field time series, see FieldTimeSeries\nmask: The mask value. Can be a function of (x, y, z, time), an array or a number\ntimescale: The restoring timescale.\n\n\n\n\n\n","category":"function"},{"location":"library/public/#Bathymetry","page":"Public","title":"Bathymetry","text":"","category":"section"},{"location":"library/public/","page":"Public","title":"Public","text":"Modules = [ClimaOcean.Bathymetry]\nPrivate = false","category":"page"},{"location":"library/public/#ClimaOcean.Bathymetry.regrid_bathymetry-Tuple{Any}","page":"Public","title":"ClimaOcean.Bathymetry.regrid_bathymetry","text":"regrid_bathymetry(target_grid;\n                  url = \"https://www.ngdc.noaa.gov/thredds/fileServer/global/ETOPO2022/60s/60s_surface_elev_netcdf\", \n                  height_above_water = <none>,\n                  minimum_depth = 0,\n                  dir = download_cache,\n                  filename = \"ETOPO_2022_v1_60s_N90W180_surface.nc\")\n\nRegrid bathymetry associated with the NetCDF file at path = joinpath(dir, filename) to target_grid. If path does not exist, then a download is attempted from joinpath(url, filename).\n\nArguments:\n\ntarget_grid: grid to interpolate onto\n\nKeyword Arguments:\n\nheightabovewater: limits the maximum height of above-water topography (where h > 0). If                     nothing the original topography is retained\nminimumdepth: minimum depth for the shallow regions, defined as a positive value.                 `h > - minimumdepth` will be considered land\ndir: directory of the bathymetry-containing file\nfilename: file containing bathymetric data. Must be netcdf with fields:           (1) lat vector of latitude nodes           (2) lon vector of longitude nodes           (3) z matrix of depth values\ninterpolationpasses: regridding/interpolation passes. The bathymetry is interpolated in                       `interpolationpasses - 1` intermediate steps. With more steps the                        final bathymetry will be smoother.                       Example: interpolating from a 400x200 grid to a 100x100 grid in 4 passes will involve                       - 400x200 -> 325x175                       - 325x175 -> 250x150                       - 250x150 -> 175x125                       - 175x125 -> 100x100                       If coarsening the original grid, linear interpolation in passes is equivalent to                        applying a smoothing filter, with more passes increasing the strength of the filter.                       If refining the original grid, additional passes will not help and no intermediate                       steps will be performed.\nmajorbasins: Number of \"independent major basins\", or fluid regions fully encompassed by land,               that are retained by [`removeminorbasins!](@ref). Basins are removed by order of size:               the smallest basins are removed first.majorbasins=1will retain only the largest basin.               Default:Inf`, which does not remove any basins.\n\n\n\n\n\n","category":"method"},{"location":"library/public/#ClimaOcean.Bathymetry.retrieve_bathymetry-Tuple{Any, Any}","page":"Public","title":"ClimaOcean.Bathymetry.retrieve_bathymetry","text":"retrieve_bathymetry(grid, filename; kw...)\n\nRetrieve the bathymetry data from a file or generate it using a grid and save it to a file.\n\nArguments\n\n============\n\ngrid: The grid used to generate the bathymetry data.\nfilename: The name of the file to read or save the bathymetry data.\nkw...: Additional keyword arguments.\n\nReturns\n\n===========\n\nbottom_height: The retrieved or generated bathymetry data.\n\nIf the specified file exists, the function reads the bathymetry data from the file.  Otherwise, it generates the bathymetry data using the provided grid and saves it to the file before returning it.\n\n\n\n\n\n","category":"method"}]
}
