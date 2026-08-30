LOGGING MONITORING OBSERVABILITY

need to keep track of all the distrubuted systems we a record of all the events that happen in both backend and frontend with some metadata
what was triggered - recording

monitoring - keeping track state of microservices  like 10 - 15 seconds

observability - understanding what is happening in the system 

logs - basically record important

metrics - 

traces - transactions start to last

primary form of catching was only monitoring only get info 

but observability gives us more context if followed all the methods 

logging is like dairy like what when and exactly why

monitoring like tracking the behaviour of the application (metrics)

internal aspects by external outputs - observability (traces)

like numbers how many requests have status codes more than 200 (logs related to this) then jump to traces


Logging :-
levels - debug - mostly in develop not in production 
 , info - general information 
 , warn - warning (in between info and error)
 , error - error (something went wrong)
 , fatal - fatal error (application crashed)

structure vs unstructured logging
debug console in readable in development

structured - in json format and not in text (parsing issue) (production)

software - prometheus - metrics
         - grafana - visualization
         - elasticsearch - logs
         - kibana - visualization
         - jaeger - traces
         - zipkin - traces

         we need to have differentiation in prod and dev and also between logs level

         observability two terms - instrumentation (measuring different attributes) , open telemetry (proper instrumentation)

         first before request response cycle we are creating transaction in that we are setting the context 

         trace - first context , then transaction , then span (individual operations within transaction)

metrics are nothing but dashboard 
