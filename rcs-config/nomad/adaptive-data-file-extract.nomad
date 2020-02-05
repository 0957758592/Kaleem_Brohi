job "adaptive-data-file-extract-ENVIRONMENT" {

  constraint {
    attribute = "${attr.kernel.name}"
    operator  = "="
    value     = "linux"
  }

  constraint {
    attribute = "${meta.group}"
    operator = "set_contains"
    value = "adaptive-services"
  }

  constraint {
    attribute = "${meta.env}"
    operator = "="
    value = "AWS_ENV"
  }

  constraint {
    attribute = "${node.class}"
    operator = "set_contains"
    value     = "ENVIRONMENT"
  }

  datacenters = ["dc1"]

  group "adaptive" {
    count = 1

    task "adaptive-data-file-extract-ENVIRONMENT" {
      driver = "docker"
      config {
        image = "artifact-repo.service.rcs@@ENV@@.rsiapps.internal:6070/rcs/adaptive-data-file-extract:TAG"

        port_map {
          http = 3000
        }
       }

      service {
        name = "adaptive-file-extract-ENVIRONMENT"
        port = "http"
      }
      resources {
        cpu = 500 //@nomad.resources.cpu@
        memory = 700 //@nomad.resources.mem@
        disk = 500 //@nomad.resources.disk@
        network {
          mbits = 1
          port "http" {
          }

        }
      }
    }
  }
}
